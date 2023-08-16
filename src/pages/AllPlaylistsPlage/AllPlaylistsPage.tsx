import React from "react";
import { Stack } from "@mui/material";
import AllPlaylistsHeader from "./AllPlaylistsHeader";
import PlaylistsSection from "../../components/playlist/PlaylistsSection";

const AllPlaylistsPage = () => {
    return (
        <Stack
            height="100%"
            bgcolor="custom.bg.main"
            sx={{
                overflow: "auto",
                paddingBottom: "75px",
            }}
        >
            <AllPlaylistsHeader />

            <Stack width="100%" alignItems="center">
                <Stack flexDirection="column" width="80%">
                    <PlaylistsSection title="Ваши плейлисты" />
                    <PlaylistsSection title="Нравится" />
                </Stack>
            </Stack>
        </Stack>
    );
};

export default AllPlaylistsPage;
