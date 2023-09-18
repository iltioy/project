import { makeAutoObservable } from "mobx";
import { OrderedPlaylist } from "../types";

class PlaylistsStore {
    added_playlists: OrderedPlaylist[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setAddedPlaylists(playlists: OrderedPlaylist[]) {
        this.added_playlists = playlists;
    }
}

export default new PlaylistsStore();
