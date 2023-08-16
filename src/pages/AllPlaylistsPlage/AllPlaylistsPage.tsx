import React from "react";
import { Stack } from "@mui/material";
import AllPlaylistsHeader from "./AllPlaylistsHeader";
import PlaylistsSection from "./PlaylistsSection";

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

            <PlaylistsSection title="Ваши плейлисты" />
            <PlaylistsSection title="Нравится" />
        </Stack>
    );
};

export default AllPlaylistsPage;
