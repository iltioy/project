import { Grid, Stack, IconButton, Box, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SongType } from "../types";
import { SxProps, Theme } from "@mui/material";

interface SongRecordProps {
    song: SongType;
    handleOpenSongSettings?: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    sx?: SxProps<Theme> | undefined;
    search?: boolean;
}

const SongRecord = ({
    song,
    handleOpenSongSettings,
    sx,
    search,
}: SongRecordProps) => {
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
                ...sx,
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
                    paddingLeft: "20px",
                    width: "calc(100% - 62px)",
                }}
                container
            >
                <Grid item xs={12} sm={8} md={6}>
                    <Typography
                        sx={{
                            fontWeight: "bold",

                            maxWidth: "100%",
                        }}
                        noWrap
                    >
                        {song.title.slice(0, 30)}
                        {song.title.length > 30 ? "..." : ""}
                    </Typography>
                    <Typography
                        variant="caption"
                        color={`${search ? "grey" : "text.secondary"}`}
                        maxWidth="100%"
                        display="block"
                        noWrap
                    >
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
                    justifySelf="flex-end"
                    marginLeft="auto"
                    marginRight="20px"
                    display={{
                        xs: "none",
                        sm: "block",
                    }}
                >
                    <Box height="100%" display="flex" alignItems="center">
                        <IconButton>
                            <FavoriteBorderIcon
                                htmlColor={`${search && "white"}`}
                            />
                        </IconButton>

                        <IconButton
                            sx={{
                                marginLeft: "15px",
                            }}
                            onClick={(e) =>
                                handleOpenSongSettings &&
                                handleOpenSongSettings(e)
                            }
                        >
                            <MoreVertIcon htmlColor={`${search && "white"}`} />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default SongRecord;
