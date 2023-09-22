import { makeAutoObservable } from "mobx";

class ModalsStore {
  isSongUploadModalActive = false;

  constructor() {
    makeAutoObservable(this);
  }

  toggleSongUploadModal() {
    this.isSongUploadModalActive = !this.isSongUploadModalActive;
  }
}

export default new ModalsStore();
