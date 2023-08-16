import { Grid, Stack, Typography, Divider } from "@mui/material";
import PlaylistItem from "./PlaylistItem";
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
                <Stack>
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
                                <Grid item key={index}>
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
