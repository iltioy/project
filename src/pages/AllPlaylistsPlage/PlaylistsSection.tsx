import { Grid, Stack, Typography, Divider } from "@mui/material";
import PlaylistItem from "../../components/PlaylistItem";
import { playlists } from "../../faker";

interface PlaylistsSectionProps {
    title: string;
}

const PlaylistsSection: React.FC<PlaylistsSectionProps> = ({ title }) => {
    return (
        <>
            <Stack
                flexDirection="column"
                sx={{
                    width: "100%",
                    alignItems: "center",
                }}
                color="text.primary"
            >
                <Stack
                    sx={{
                        width: "80%",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            marginBottom: "10px",
                        }}
                        noWrap
                    >
                        {title}
                    </Typography>
                    <Divider
                        sx={{
                            marginBottom: "25px",
                        }}
                    />

                    <Grid container spacing={2}>
                        {playlists.map((playlist, index) => {
                            return (
                                <Grid item>
                                    <PlaylistItem
                                        key={index}
                                        playlist={playlist}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Stack>
            </Stack>
        </>
    );
};

export default PlaylistsSection;
