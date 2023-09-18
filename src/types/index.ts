export interface SongType {
    id: string;
    title: string;
    author: string;
    album: string;
    imageURL: string;
}

export interface PlaylistInfo {
    username: string;
    imageURL: string;
    title: string;
    info: PlaylistAdditionalInfo;
}

interface PlaylistAdditionalInfo {
    numberOfSongs: number;
    numberOfListens: number;
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
