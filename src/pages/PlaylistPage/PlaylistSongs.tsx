import { Grid, Stack, IconButton, Box, Typography } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SongType } from "../../types";

interface SongRecordProps {
    song: SongType;
    handleOpenSongSettings: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

const SongRecord = ({ song, handleOpenSongSettings }: SongRecordProps) => {
    return (
        <Stack
            bgcolor="custom.bg.secondary"
            sx={{
                border: "1px solid grey",
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
            }}
        >
            <img
                src={song.imageURL}
                style={{
                    height: "50px",
                    width: "50px",
                    objectFit: "cover",
                    borderRadius: "5px",
                    marginLeft: "12px",
                }}
                alt=""
            />
            <Grid
                sx={{
                    height: "50px",
                    marginLeft: "20px",
                }}
                container
            >
                <Grid item xs={12} sm={8} md={6}>
                    <Typography
                        sx={{
                            fontWeight: "bold",
                        }}
                    >
                        {song.title.slice(0, 30)}
                        {song.title.length > 30 ? "..." : ""}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {song.author}
                    </Typography>
                </Grid>
                <Grid
                    md={2}
                    display={{
                        xs: "none",
                        md: "block",
                    }}
                    overflow="hidden"
                    paddingRight="10px"
                    item
                >
                    {song.album.slice(0, 30)}
                </Grid>

                <Grid
                    item
                    md="auto"
                    marginLeft="auto"
                    marginRight="20px"
                    display={{
                        xs: "none",
                        sm: "block",
                    }}
                >
                    <Box height="100%" display="flex" alignItems="center">
                        <IconButton>
                            <FavoriteBorderIcon />
                        </IconButton>

                        <IconButton
                            sx={{
                                marginLeft: "15px",
                            }}
                            onClick={(e) => handleOpenSongSettings(e)}
                        >
                            <MoreVertIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Stack>
    );
};

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
            bgcolor="custom.bg.main"
            color="text.primary"
        >
            <Stack
                sx={{
                    width: {
                        xs: "100%",
                        sm: "80%",
                    },
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
