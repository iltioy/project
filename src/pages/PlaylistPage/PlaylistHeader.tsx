import { Stack, IconButton, Box, Typography, Button } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { PlaylistInfo } from "../../types";
import { useTheme } from "@mui/material/styles";
import MixSongsButton from "../../components/MixSongsButton";

interface PlaylistHeaderProps {
    playlist: PlaylistInfo;
    handleOpenPlaylistSettings: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
}

const PlaylistHeader = ({
    playlist,
    handleOpenPlaylistSettings,
}: PlaylistHeaderProps) => {
    const theme = useTheme();

    return (
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
                    zIndex: 2,
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
                    zIndex: 3,
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
                                theme.palette.mode === "dark"
                                    ? "black"
                                    : "white"
                            }`,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
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
                                theme.palette.mode === "dark"
                                    ? "black"
                                    : "white"
                            }`,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}
                        color="text.primary"
                    >
                        {playlist.username}
                    </Typography>

                    <Box
                        sx={{
                            marginBottom: {
                                xs: "0px",
                                md: "20px",
                            },
                        }}
                    >
                        <IconButton>
                            <FavoriteBorderIcon color="warning" />
                        </IconButton>
                        <IconButton onClick={handleOpenPlaylistSettings}>
                            <MoreHorizIcon color="warning" />
                        </IconButton>
                    </Box>

                    <Box>
                        <MixSongsButton />
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default PlaylistHeader;
