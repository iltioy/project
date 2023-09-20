import {
  Grid,
  Stack,
  IconButton,
  Box,
  Typography,
  Skeleton,
} from "@mui/material";
import { SongType } from "../../types";
import SongRecord from "../../components/SongRecord";

interface PlaylistSongsProps {
  data: SongType[];
  isLoading?: boolean;
}

const PlaylistSongs = ({ data, isLoading }: PlaylistSongsProps) => {
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
          ) : (
            <>
              <Grid item xs={12} md={6}>
                Название
              </Grid>
              <Grid item md="auto" display={{ xs: "none", md: "block" }}>
                Альбом
              </Grid>
            </>
          )}
        </Grid>

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
};

export default PlaylistSongs;
