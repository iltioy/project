import { Stack } from "@mui/material";
import { useState } from "react";
import EditPlaylistHeader from "./EditPlaylistHeader";
import { observer } from "mobx-react-lite";
import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router";
import { ImageType, PlaylistType } from "../../types";
import "../PlaylistPage/playlistPage.styles.css";

const EditPlaylistPage = observer(() => {
  const { playlistId } = useParams();
  const [playlistName, setPlaylistName] = useState("");
  const [playlistImage, setPlaylistImage] = useState<ImageType>({});

  const { data: playlist, isLoading } = useQuery(
    ["playlist", playlistId],
    () => {
      return axios.get(`/playlists/${playlistId}`);
    },
    {
      select: (data) => {
        const playlist: PlaylistType = data.data;
        return playlist;
      },
      onSuccess: (data) => {
        if (playlistName === "" && !playlistImage.image_url) {
          setPlaylistName(data.name);
          setPlaylistImage(data.image);
        }
      },
    }
  );

  return (
    <>
      <Stack
        height="100%"
        flexDirection="column"
        bgcolor="custom.bg.main"
        overflow="auto"
      >
        <EditPlaylistHeader
          // playlist={playlist}
          isLoading={isLoading}
          playlist={playlist}
          playlistName={playlistName}
          setPlaylistName={setPlaylistName}
          playlistImage={playlistImage}
          setPlaylistImage={setPlaylistImage}
        />

        {/* <PlaylistSongs data={songs} isLoading={isLoading} />

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
      </Menu> */}
      </Stack>
    </>
  );
});

export default EditPlaylistPage;
