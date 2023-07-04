import { Grid, Stack, IconButton, Box, Typography, Menu, MenuItem } from "@mui/material";
import { Params, useParams } from "react-router";
import { faker } from "@faker-js/faker";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useTheme } from "@mui/material/styles";

import "./playlistPage.styles.css";
import { useState } from "react";

interface SongType {
    id: string;
    title: string;
    author: string;
    album: string;
    imageURL: string;
}

interface PlaylistInfo {
    username: string;
    imageURL: string;
    title: string;
    info: PlaylistAdditionalInfo;
}

interface PlaylistAdditionalInfo {
    numberOfSongs: number;
    numberOfListens: number;
}

let playlist: PlaylistInfo = {
    imageURL: faker.image.url(),
    title: faker.lorem.words(),
    username: faker.person.fullName(),
    info: {
        numberOfListens: 100,
        numberOfSongs: 199,
    },
};

let data: SongType[] = [];

for (let i = 0; i < 50; i++) {
    data.push({
        id: faker.string.uuid(),
        album: faker.music.genre(),
        author: faker.person.fullName(),
        imageURL: faker.image.url(),
        title: faker.music.songName(),
    });
}

const PlaylistPage = () => {
    const params = useParams<Params>();
    const theme = useTheme();

    const [songSettingsAnchorElement, setSongSettingsAnchorElement] = useState<null | HTMLElement>(
        null
    );

    let isSongSettingOpen = Boolean(songSettingsAnchorElement);

    const handleOpenSongSettings = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setSongSettingsAnchorElement(e.currentTarget);
    };

    const handleCloseSongSettings = () => {
        setSongSettingsAnchorElement(null);
    };

    const [playlistSettingsAnchorElement, setPlaylistSettingsAnchorElement] =
        useState<null | HTMLElement>(null);

    let isPlaylistSettingOpen = Boolean(playlistSettingsAnchorElement);

    const handleOpenPlaylistSettings = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setPlaylistSettingsAnchorElement(e.currentTarget);
    };

    const handleClosePlaylistSettings = () => {
        setPlaylistSettingsAnchorElement(null);
    };

    return (
        <Stack height="100%" flexDirection="column">
            <Stack
                sx={{
                    width: "100%",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                <Stack
                    sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        zIndex: 1,
                        background: `url(${playlist.imageURL}) no-repeat center center fixed`,
                        backgroundSize: "cover",
                        filter: "blur(10px)",
                    }}
                />
                <Stack
                    sx={{
                        width: {
                            xs: "95%",
                            sm: "80%",
                        },
                        height: "100%",
                        zIndex: 100,
                    }}
                    flexDirection="row"
                >
                    <img src={playlist.imageURL} alt="" className="playlistImage" />

                    <Stack
                        flexDirection="column"
                        paddingLeft="15px"
                        sx={{
                            marginTop: {
                                xs: "37.5px",
                                md: "50px",
                            },
                            overflow: "hidden",
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                fontSize: {
                                    xs: "20px",
                                    md: "40px",
                                },
                                // textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
                                textShadow: `1px 1px 10px ${
                                    theme.palette.mode === "dark" ? "black" : "white"
                                }`,
                            }}
                            color="text.primary"
                        >
                            {playlist.title}
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                fontSize: {
                                    xs: "17px",
                                    md: "25px",
                                },
                                textShadow: `1px 1px 10px ${
                                    theme.palette.mode === "dark" ? "black" : "white"
                                }`,
                            }}
                            color="text.primary"
                        >
                            {playlist.username}
                        </Typography>

                        <Box>
                            <IconButton>
                                <FavoriteBorderIcon color="warning" />
                            </IconButton>
                            <IconButton onClick={handleOpenPlaylistSettings}>
                                <MoreHorizIcon color="warning" />
                            </IconButton>
                        </Box>
                    </Stack>
                </Stack>
            </Stack>

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
                                key={song.id}
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
                    })}

                    <Menu
                        open={isSongSettingOpen}
                        anchorEl={songSettingsAnchorElement}
                        onClose={handleCloseSongSettings}
                        anchorOrigin={{
                            horizontal: "center",
                            vertical: "bottom",
                        }}
                        transformOrigin={{
                            horizontal: "center",
                            vertical: "top",
                        }}
                    >
                        <MenuItem>Скачать</MenuItem>
                        <MenuItem>Экспорт</MenuItem>
                    </Menu>

                    <Menu
                        open={isPlaylistSettingOpen}
                        anchorEl={playlistSettingsAnchorElement}
                        onClose={handleClosePlaylistSettings}
                        anchorOrigin={{
                            horizontal: "center",
                            vertical: "bottom",
                        }}
                        transformOrigin={{
                            horizontal: "center",
                            vertical: "top",
                        }}
                    >
                        <MenuItem>Скачать</MenuItem>
                        <MenuItem>Экспорт</MenuItem>
                    </Menu>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default PlaylistPage;
