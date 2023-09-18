export interface SongType {
  id: string;
  title: string;
  author: string;
  album: string;
  imageURL: string;
}

export const enum RadioSubPage {
  ALL = "ВСЁ",
  NEW = "НОВИНКИ",
  TRENDS = "В ТРЕНДЕ",
}

export interface ImageType {
  image_key?: string;
  image_url?: string;
}

export interface PlaylistType {
  id: number;
  name: string;
  is_favorite?: boolean;
  image: ImageType;
  owner: UserType;
  order: number;
}

export interface OrderedPlaylist {
  order: number;
  playlist: PlaylistType;
}

export interface UserType {
  username?: string;
  email?: string;
  role?: string;
  image?: ImageType;
}
