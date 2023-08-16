import { Grid, Stack, IconButton, Box, Typography } from "@mui/material";

import { SongType } from "../../types";
import SongRecord from "../../components/SongRecord";

interface PlaylistSongsProps {
    data: SongType[];
    handleOpenSongSettings: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

const PlaylistSongs = ({
    data,
    handleOpenSongSettings,
}: PlaylistSongsProps) => {
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
                    paddingLeft="84px"
                    marginBottom="10px"
                >
                    <Grid item xs={12} md={6}>
                        Название
                    </Grid>
                    <Grid item md="auto" display={{ xs: "none", md: "block" }}>
                        Альбом
                    </Grid>
                </Grid>

                {data.map((song: SongType) => {
                    return (
                        <SongRecord
                            handleOpenSongSettings={handleOpenSongSettings}
                            song={song}
                            key={song.id}
                        />
                    );
                })}
            </Stack>
        </Stack>
    );
};

export default PlaylistSongs;
