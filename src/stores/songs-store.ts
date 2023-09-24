import { makeAutoObservable } from "mobx";
import { OrderedSongType, PlaylistType, SongType } from "../types";

class SongsStore {
  current_playlist_songs: SongType[] = [];
  liked_songs_ids: number[] = [];

  current_song?: SongType;

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPlaylistSongs() {}

  setLikedSongsIds(playlist: PlaylistType) {
    const ids: number[] = [];

    playlist.songs.forEach((orderedSong: OrderedSongType) => {
      ids.push(orderedSong.song.id);
    });

    this.liked_songs_ids = ids;
  }

  toggleLikedSongId(id: number) {
    if (!this.liked_songs_ids.includes(id)) {
      this.liked_songs_ids.push(id);
      return;
    }
    let newUserLikedSongIds = this.liked_songs_ids.filter(
      (songId) => songId !== id
    );
    this.liked_songs_ids = newUserLikedSongIds;
  }

  setCurrentSong(song: SongType) {
    if (this.current_song) {
      if (this.current_song.id === song.id) return;
    }

    if (song) {
      console.log("song set!");

      this.current_song = song;
    }
  }
}

export default new SongsStore();
