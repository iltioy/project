import React from "react";
import { Stack } from "@mui/material";
import AllPlaylistsHeader from "./AllPlaylistsHeader";
import PlaylistsSection from "../../components/playlist/PlaylistsSection";
import PlaylistCarousel from "../../components/playlist/PlaylistCarousel";
import { playlists } from "../../faker";
import { observer } from "mobx-react-lite";
import { useStores } from "../../root-store-context";
import { useQuery } from "react-query";
import axios from "axios";

const AllPlaylistsPage = observer(() => {
    const { playlistsStore } = useStores();

    const {} = useQuery("liked_playlists", () => {});

    return (
        <Stack
            height="100%"
            bgcolor="custom.bg.main"
            sx={{
                overflow: "auto",
                paddingBottom: "75px",
            }}
            color="text.primary"
        >
            <AllPlaylistsHeader />

            <Stack width="100%" alignItems="center">
                <Stack
                    flexDirection="column"
                    sx={{
                        width: {
                            xs: "95%",
                            sm: "80%",
                        },
                    }}
                >
                    <Stack
                        width="100%"
                        flexDirection="column"
                        sx={{
                            display: {
                                xs: "flex",
                                md: "none",
                            },
                        }}
                    >
                        <PlaylistCarousel
                            playlists={playlistsStore.added_playlists}
                            title="Ваши плейлисты"
                            isOwnedPlaylists={true}
                        />
                        <PlaylistCarousel playlists={playlists} title="Нравится" />
                    </Stack>

                    <Stack
                        sx={{
                            display: {
                                xs: "none",
                                md: "flex",
                            },
                        }}
                        width="100%"
                        flexDirection="column"
                    >
                        <PlaylistsSection
                            playlists={playlistsStore.added_playlists}
                            title="Ваши плейлисты"
                            isOwnedPlaylists={true}
                        />

                        <PlaylistsSection playlists={playlists} title="Нравится" />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
});

export default AllPlaylistsPage;
