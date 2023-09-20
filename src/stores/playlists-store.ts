import { makeAutoObservable } from "mobx";
import { OrderedPlaylist, PlaylistType } from "../types";

class PlaylistsStore {
    added_playlists: PlaylistType[] = [];
    liked_playlists: PlaylistType[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setAddedPlaylists(data: any) {
        const ordered_added_playlists: OrderedPlaylist[] = data?.added_playlists;
        let added_playlists: PlaylistType[] = [];
        ordered_added_playlists.map((orderedPlaylist) => {
            added_playlists.push(orderedPlaylist.playlist);
        });

        this.added_playlists = added_playlists;
    }

    setLikedPlaylists(data: any) {
        const ordered_liked_playlists: OrderedPlaylist[] = data?.liked_playlists;
        let liked_playlists: PlaylistType[] = [];
        ordered_liked_playlists.map((orderedPlaylist) => {
            liked_playlists.push(orderedPlaylist.playlist);
        });

        this.liked_playlists = liked_playlists;
    }
}

export default new PlaylistsStore();
