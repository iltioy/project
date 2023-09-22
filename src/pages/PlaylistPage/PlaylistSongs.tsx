import { Grid, Stack, Skeleton } from "@mui/material";
import { SongType } from "../../types";
import SongRecord from "../../components/SongRecord";
import AddIcon from "@mui/icons-material/Add";
import { observer } from "mobx-react-lite";
import { useStores } from "../../root-store-context";

interface PlaylistSongsProps {
    data: SongType[];
    isLoading?: boolean;
}

const PlaylistSongs = observer(({ data, isLoading }: PlaylistSongsProps) => {
    const { modalsStore } = useStores();

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

                <Stack
                    bgcolor="custom.bg.secondary"
                    sx={{
                        border: "1px dashed grey",
                        height: "74px",
                        borderRadius: 1,
                        marginBottom: "5px",
                        ":last-child": {
                            marginBottom: 0,
                        },
                        flexDirection: "row",
                        alignItems: "center",
                        cursor: "pointer",
                        overflow: "hidden",
                        width: "100%",
                    }}
                    justifyContent="center"
                    alignItems="center"
                    onClick={() => {
                        modalsStore.toggleSongUploadModal();
                    }}
                >
                    <AddIcon
                        sx={{
                            fontSize: {
                                md: "47px",
                            },
                        }}
                    />
                </Stack>

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
});

export default PlaylistSongs;
