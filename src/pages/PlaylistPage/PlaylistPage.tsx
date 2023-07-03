import { Divider, Grid, Stack, ToggleButton, Typography } from "@mui/material";
import { Params, useParams } from "react-router";
import { faker } from "@faker-js/faker";
import { Box } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface SongType {
    id: string;
    title: string;
    author: string;
    album: string;
    imageURL: string;
}

let data: SongType[] = [];

for (let i = 0; i < 5; i++) {
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

    console.log(params);
    console.log(data);

    return (
        <Stack>
            <Stack
                sx={{
                    width: "100%",
                    height: "300px",
                    background: "pink",
                }}
            >
                Playlist Header
            </Stack>

            <Stack
                sx={{
                    width: "100%",
                    paddingY: "50px",
                    display: "flex",
                    alignItems: "center",
                }}
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
                                        display={{ xs: "none", md: "block" }}
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
                                        display={{ xs: "none", sm: "block" }}
                                    >
                                        <Box height="100%" display="flex" alignItems="center">
                                            <FavoriteBorderIcon />
                                            <MoreVertIcon
                                                sx={{
                                                    marginLeft: "15px",
                                                }}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Stack>
                        );
                    })}
                </Stack>
            </Stack>
        </Stack>
    );
};

export default PlaylistPage;
