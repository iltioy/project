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
