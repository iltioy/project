import { Grid, Stack, Typography, Divider } from "@mui/material";
import PlaylistItem from "./PlaylistItem";
import { PlaylistType } from "../../types";

interface PlaylistsSectionProps {
  title: string;
  playlists: PlaylistType[];
}

const PlaylistsSection: React.FC<PlaylistsSectionProps> = ({
  title,
  playlists,
}) => {
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
        <Stack sx={{ width: "100%" }}>
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
                  <PlaylistItem key={index} playlist={playlist} />
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
