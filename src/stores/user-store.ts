import { makeAutoObservable } from "mobx";

interface User {
  username?: string;
  email?: string;
  role?: string;
  image?: ImageType;
}

interface ImageType {
  image_key: string | null;
  image_url: string | null;
}

class UserStore {
  user: User = {};
  // username?: string;
  // email?: string;
  // role?: string;
  // image?: ImageType;

  access_token?: string | null = localStorage.getItem("access_token") || null;
  refresh_token?: string | null = localStorage.getItem("refresh_token") || null;

  constructor() {
    makeAutoObservable(this);
  }

  setTokens(access_token: string, refresh_token: string) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;

    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
  }

  setUserInfo(data: User) {
    this.user = {
      email: data.email,
      image: data.image,
      role: data.role,
      username: data.username,
    };

    // this.username = data.username;
    // this.image = data.image;
    // this.role = data.role;
    // this.email = data.email;
  }

  logout() {
    this.user = {};
    this.access_token = null;
    this.refresh_token = null;

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }
}

export default new UserStore();
