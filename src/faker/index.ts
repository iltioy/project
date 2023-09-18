import { OrderedPlaylist, PlaylistInfo, PlaylistType, SongType } from "../types";
import { faker } from "@faker-js/faker";

export let playlist: PlaylistInfo = {
    imageURL: faker.image.url(),
    title: faker.lorem.words(),
    username: faker.person.fullName(),
    info: {
        numberOfListens: 100,
        numberOfSongs: 199,
    },
};

let data: SongType[] = [];

for (let i = 0; i < 10; i++) {
    data.push({
        id: faker.string.uuid(),
        album: faker.music.genre(),
        author: faker.person.fullName(),
        imageURL: faker.image.url(),
        // title: faker.music.songName(),
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur veniam eligendi quia odit quasi in, laborumsunt. Quos, aliquam? Autem unde ut porro rerum quoscorporis vel modi suscipit iure.",
    });
}

let playlistData: OrderedPlaylist[] = [];

for (let i = 0; i < 10; i++) {
    playlistData.push({
        order: 1,
        playlist: {
            owner: {
                email: faker.person.fullName(),
                image: {
                    image_url: faker.image.url(),
                },
                role: "user",
                username: faker.person.fullName(),
            },
            image: {
                image_url: faker.image.url(),
            },
            id: 1,
            name: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Aspernatur veniam eligendi quia odit quasi in, laborumsunt. Quos, aliquam? Autem unde ut porro rerum quoscorporis vel modi suscipit iure.",
        },
    });
}

export const playlists = playlistData;
export const songs = data;
