import { Stack, Menu, MenuItem } from "@mui/material";
import { Params, useParams } from "react-router";
import { faker } from "@faker-js/faker";

import { useTheme } from "@mui/material/styles";

import "./playlistPage.styles.css";
import { useState } from "react";
import { PlaylistInfo, SongType } from "../../types";
import PlaylistHeader from "./PlaylistHeader";
import PlaylistSongs from "./PlaylistSongs";
import useMenu from "../../hooks/useMenu";

let playlist: PlaylistInfo = {
    imageURL: faker.image.url(),
    title: faker.lorem.words(),
    username: faker.person.fullName(),
    info: {
        numberOfListens: 100,
        numberOfSongs: 199,
    },
};

let data: SongType[] = [];

for (let i = 0; i < 50; i++) {
    data.push({
        id: faker.string.uuid(),
        album: faker.music.genre(),
        author: faker.person.fullName(),
        imageURL: faker.image.url(),
        title: faker.music.songName(),
    });
}

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
        <Stack height="100%" flexDirection="column">
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
