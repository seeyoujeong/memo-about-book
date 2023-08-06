export interface Song {
  artist: string | string[];
  length: number;
  name: string;
  type: "song";
}

export interface Album {
  songs: Song[];
  type: "album";
}

export interface Playlist {
  resolve(): Song[];
  type: "playlist";
}

export type PlaylistItem = Album | Song | Playlist;

export interface Artists {
  [i: string]: string[];
}

export interface UnrolledPlaylist {
  artists: Artists;
  songs: string[];
  time: number;
}

export function unrollPlaylist(items: PlaylistItem[]): UnrolledPlaylist {
  const artists: Artists = {};
  const songs: string[] = [];
  let time = 0;

  for (const item of items) {
    switch (item.type) {
      case "song":
        time += item.length;
        songs.push(item.name);

        if (typeof item.artist === "string") {
          if (item.artist in artists) {
            artists[item.artist].push(item.name);
          } else {
            artists[item.artist] = [item.name];
          }
        } else {
          for (const artist of item.artist) {
            if (artist in artists) {
              artists[artist].push(item.name);
            } else {
              artists[artist] = [item.name];
            }
          }
        }
        break;
      case "album":
        for (const song of item.songs) {
          time += song.length;
          songs.push(song.name);

          if (typeof song.artist === "string") {
            if (song.artist in artists) {
              artists[song.artist].push(song.name);
            } else {
              artists[song.artist] = [song.name];
            }
          } else {
            for (const artist of song.artist) {
              if (artist in artists) {
                artists[artist].push(song.name);
              } else {
                artists[artist] = [song.name];
              }
            }
          }
        }
        break;
      case "playlist":
        for (const song of item.resolve()) {
          time += song.length;
          songs.push(song.name);

          if (typeof song.artist === "string") {
            if (song.artist in artists) {
              artists[song.artist].push(song.name);
            } else {
              artists[song.artist] = [song.name];
            }
          } else {
            for (const artist of song.artist) {
              if (artist in artists) {
                artists[artist].push(song.name);
              } else {
                artists[artist] = [song.name];
              }
            }
          }
        }
        break;
    }
  }

  return {
    artists,
    songs,
    time,
  };
}

// solution
// export function unrollPlaylist(items: PlaylistItem[]): UnrolledPlaylist {
//   const artists: Artists = {};
//   const songs: string[] = [];
//   let time = 0;

//   function addSong(song: Song) {
//     const songArtists =
//       typeof song.artist === "string" ? [song.artist] : song.artist;

//     for (const artist of songArtists) {
//       artists[artist] ??= [];
//       artists[artist].push(song.name);
//     }

//     time += song.length;
//     songs.push(song.name);
//   }

//   for (const item of items) {
//     switch (item.type) {
//       case "song":
//         addSong(item);
//         break;

//       case "album":
//         item.songs.forEach(addSong);
//         break;

//       case "playlist":
//         item.resolve().forEach(addSong);
//         break;
//     }
//   }

//   return { artists, songs, time };
// }
