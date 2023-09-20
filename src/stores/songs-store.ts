import { makeAutoObservable } from "mobx";
import { SongType } from "../types";

class SongsStore {
  current_playlist_songs: SongType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPlaylistSongs() {}
}

export default new SongsStore();
