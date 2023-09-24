import { Grid, Stack, Skeleton } from "@mui/material";
import { SongType } from "../../types";
import SongRecord from "../../components/SongRecord";
import { observer } from "mobx-react-lite";
import { useStores } from "../../root-store-context";
import AddSongItem from "../../components/playlist/AddSongItem";

interface PlaylistSongsProps {
  data: SongType[];
  isLoading?: boolean;
  isEdit?: boolean;
}

const PlaylistSongs = observer(
  ({ data, isLoading, isEdit }: PlaylistSongsProps) => {
    return (
      <Stack
        sx={{
          width: "100%",
          paddingY: "50px",
          display: "flex",
          alignItems: "center",
        }}
        color="text.primary"
      >
        <Stack
          sx={{
            width: {
              xs: "100%",
              sm: "80%",
            },
            paddingBottom: "50px",
          }}
        >
          <Grid
            container
            display={{ xs: "none", md: "flex" }}
            marginBottom="10px"
            sx={{
              paddingLeft: isLoading ? "" : "84px",
            }}
          >
            {isLoading ? (
              <Grid item xs={12}>
                <Skeleton />
              </Grid>
            ) : data?.length > 0 ? (
              <>
                <Grid item xs={12} md={6}>
                  Название
                </Grid>
                <Grid item md="auto" display={{ xs: "none", md: "block" }}>
                  Альбом
                </Grid>
              </>
            ) : null}
          </Grid>

          {isEdit && <AddSongItem />}

          {isLoading
            ? Array.from(Array(10).keys()).map(() => {
                return (
                  <Skeleton
                    component="div"
                    variant="rounded"
                    height="74px"
                    width="100%"
                    sx={{
                      marginBottom: "5px",
                    }}
                  />
                );
              })
            : data.map((song: SongType, index: number) => {
                return <SongRecord song={song} key={index} />;
              })}
        </Stack>
      </Stack>
    );
  }
);

export default PlaylistSongs;
