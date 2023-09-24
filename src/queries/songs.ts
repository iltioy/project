import userStore from "../stores/user-store";
import songsStore from "../stores/songs-store";
import axios from "axios";

export const toggleLikeSong = async (songId: number) => {
  try {
    await axios.patch(
      `/songs/favorite/add/${songId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${userStore.access_token}`,
        },
      }
    );

    songsStore.toggleLikedSongId(songId);
  } catch (error) {
    console.log(error);
  }
};
