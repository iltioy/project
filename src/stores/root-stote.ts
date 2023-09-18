import userStore from "./user-store";
import playlistsStore from "./playlists-store";
import authStore from "./auth-store";

class RootStore {
  userStore = userStore;
  playlistsStore = playlistsStore;
  authStore = authStore;
}

export default RootStore;
