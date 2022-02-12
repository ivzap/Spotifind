# SPOTIFIND <img src="https://user-images.githubusercontent.com/64557487/152426681-58ebde73-d290-4c20-a02c-6f9676c059d9.png" width="30" height="30"> <img src="https://user-images.githubusercontent.com/64557487/152426830-2c0b7d7b-6176-402f-b752-54145cc2a83f.png" width="30" height="30">

### refreshToken()
> generates new api token that lasts 1 hour.

**Returns:** decoded string token.

- Example:
```JavaScript
let newToken = await refreshToken();
```
- Expected Example Output:
```JavaScript
"ASLNCLASIDLjlasdiSLADKNLNlas"
```
-----------------------------------

### getUserPlaylists(user, payload = defaultPayload)
> sends a request to spotify API endpoint https://api.spotify.com/v1/users/{user}/playlists to fetch specified user playlists.

**Returns:** list of playlist string names.

- Example:
```JavaScript
let diffPayload = {
  method: "GET",
  headers: {
    "Authorization": "Bearer "+ oAuth
  }
};
let playlistNames = await getUserPlaylists(user, diffPayload);
```
- Expected Example Output:
```JavaScript
[playlist_name1, playlist_name2, playlist_name3, ...]
```
-----------------------------------

### getPlaylistTracks(playlist_id, payload = defaultPayload)
> sends a request to spotify API endpoint https://api.spotify.com/v1/playlists/${playlist_id}/tracks to fetch playlist tracks.

**Parameters:** 
- playlist_id: base-62 identifier https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids for more info.
- payload: json of the form {method: "GET", headers: {"Authorization": "Bearer "+ oAuth} by default assigned to global 'defaultPayload'.

**Returns:** list of tracks within playlist.

- Example:
```JavaScript
let diffPayload = {
  method: "GET",
  headers: {
    "Authorization": "Bearer "+ oAuth
  }
};
let playlist_id = "i1SLiamsldiJLDSN1"; // base-62 identifier(Spotify ID)
let tracks = await getPlaylistTracks(playlist_id, diffPayload);
```
- Expected Example Output:
```JavaScript
[track_name1, track_name2, track_name3, ...]
```



--------
Powered By:

<img src="https://user-images.githubusercontent.com/64557487/152425237-552f5207-4e4f-4be2-a0b7-409cfa9506df.png" width="100" height="100">

<img src="https://user-images.githubusercontent.com/64557487/152426045-017c5c52-9d70-4463-a6bd-266099d5398b.png" width="100" height="100">

connect with others and discover...
