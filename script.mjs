import fetch from 'node-fetch';
import refreshToken from './secrets.mjs';

let oAuth = await refreshToken();
let defaultPayload = {
  method: "GET",
  headers: {
    "Authorization": "Bearer "+ oAuth
  }
};

export default async function spotifyApiRequest(url, payload){
  let response = await fetch(url, payload);
  response = await response.json();
  return response;  // Note: must use await on function call 
}

async function getUserPlaylists(user, payload = defaultPayload) {
  let playlists = [];
  let url = `https://api.spotify.com/v1/users/${user}/playlists`
  let response = await spotifyApiRequest(url, payload);
  response = response['items'];
  for(const playlist of response){
    playlists.push(playlist['name']);
  }
  return playlists; // Note: must use await on function call 
}

async function getPlaylistTracks(playlist_id, payload = defaultPayload){
  let tracks = [];
  let url = `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?limit=50`
  let response = await spotifyApiRequest(url, payload);
  response = response['items'];
  for(const track of response){
    tracks.push(track['track']['name']);
  }
  return tracks; // Note: must use await on function call 
}

async function getGenres(payload = defaultPayload){
  let genres = [];
  let url = `https://api.spotify.com/v1/recommendations/available-genre-seeds`
  let response = await spotifyApiRequest(url, payload);
  response = response['genres'];
  for(const genre of response){
    genres.push(genre);
  }
  return genres; // Note: must use await on function call 
}

let playlists = await getUserPlaylists('ivzap');
let tracks = await getPlaylistTracks("5izwgjzsN7DkzIGLKgsaHb");
let genres = await getGenres();
// console.log(tracks);
// console.log(playlists);
// console.log(genres);
//let newToken = await refreshToken();
//console.log(newToken);




