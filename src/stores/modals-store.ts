import { makeAutoObservable } from "mobx";

class ModalsStore {
    isSongUploadModalActive = false;
    playlistToAddToId: number | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    toggleSongUploadModal(playlistToAddToId?: number) {
        this.isSongUploadModalActive = !this.isSongUploadModalActive;
        if (playlistToAddToId) {
            this.playlistToAddToId = playlistToAddToId;
        }
    }
}

export default new ModalsStore();
