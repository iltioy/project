import axios from "axios";
import playlistsStore from "../stores/playlists-store";
import userStore from "../stores/user-store";
import { appQueryClient as queryClient } from "..";
import { useMutation } from "react-query";
import { PlaylistType } from "../types";

export const toggleFavoritePlaylist = async (
  playlistId: number,
  username?: string
) => {
  try {
    await axios.patch(
      `/playlists/favorite/toggle/${playlistId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${userStore.access_token}`,
        },
      }
    );

    playlistsStore.toggleLikedPlaylistId(playlistId);

    if (username) {
      queryClient.invalidateQueries({
        queryKey: ["playlists", username],
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const createPlaylistQuery = () => {
  return axios.post(
    "/playlists/create",
    {},
    {
      headers: {
        Authorization: `Bearer ${userStore.access_token}`,
      },
    }
  );
};

export const useCreatePlaylist = (
  onSuccess: (playlist: PlaylistType) => void
) => {
  return useMutation(createPlaylistQuery, {
    onSuccess: (data) => {
      const playlist: PlaylistType = data.data;
      onSuccess(playlist);
    },
  });
};
