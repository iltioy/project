import { Stack, Menu, MenuItem } from "@mui/material";

import { faker } from "@faker-js/faker";

import "./playlistPage.styles.css";
import { useState } from "react";
import { PlaylistInfo, SongType } from "../../types";
import PlaylistHeader from "./PlaylistHeader";
import PlaylistSongs from "./PlaylistSongs";
import useMenu from "../../hooks/useMenu";
import { playlist } from "../../faker";
import { songs as data } from "../../faker";

const PlaylistPage = () => {
    const {
        handleClose: handleCloseSongSettings,
        handleOpen: handleOpenSongSettings,
        isOpen: isSongSettingOpen,
        anchorElement: songSettingsAnchorElement,
    } = useMenu();

    const {
        anchorElement: playlistSettingsAnchorElement,
        handleClose: handleClosePlaylistSettings,
        handleOpen: handleOpenPlaylistSettings,
        isOpen: isPlaylistSettingOpen,
    } = useMenu();

    return (
        <Stack
            height="100%"
            flexDirection="column"
            bgcolor="custom.bg.main"
            overflow="auto"
        >
            <PlaylistHeader
                handleOpenPlaylistSettings={handleOpenPlaylistSettings}
                playlist={playlist}
            />

            <PlaylistSongs
                data={data}
                handleOpenSongSettings={handleOpenSongSettings}
            />

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
    );
};

export default PlaylistPage;
