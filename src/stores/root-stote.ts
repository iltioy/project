import userStore from "./user-store";
import playlistsStore from "./playlists-store";
import authStore from "./auth-store";
import songsStore from "./songs-store";

class RootStore {
  userStore = userStore;
  playlistsStore = playlistsStore;
  authStore = authStore;
  songsStore = songsStore;
}

export default RootStore;
