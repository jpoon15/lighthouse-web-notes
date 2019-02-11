let Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
};

Library.prototype.addPlaylist = function(playlist) {
    return this.playlists.push(playlist)
};

let Playlist = function(name) {
  this.name = name,
  this.tracks = [],
  this.duration = 0,
  this.rating = 0
}

Playlist.prototype.addToTracks = function(track) {
  return this.tracks.push(track)
}

Playlist.prototype.totalDuration = function() {
  let totalDuration = this.tracks.reduce((a,b) => a += b.length, 0)
  return this.duration = totalDuration;
}

Playlist.prototype.averageRating = function() {
  let avgRating = (this.tracks.reduce((a,b) => a += b.rating, 0) / this.tracks.length).toFixed(2);
  return this.rating = avgRating;
}

// Playlist.prototype.toString = function() {
//   let trackSet = this.tracks.toString()
//   console.log(trackSet)
//   return this.tracks = trackSet;
// }

let Track = function(title, rating, length) {
 this.title = title,
 this.rating = rating,
 this.length = length
};

//Create Tracks
let track1 = new Track ('Fix You', 5, 120)
let track2 = new Track ('Scientist', 4, 180)
let track3 = new Track ('Yellow', 5, 140)

//Create Playlist
let myPlaylist = new Playlist("My Playlist")
console.log("My Playlist", myPlaylist)

myPlaylist.addToTracks(track1)
myPlaylist.addToTracks(track2)
myPlaylist.addToTracks(track3)

console.log("My Playlist after push", myPlaylist)
console.log(myPlaylist.tracks)

//Calculation total duration
myPlaylist.totalDuration()
myPlaylist.averageRating()
console.log("My Playlist", myPlaylist)

//Create New Library
let newLibrary = new Library ("StudyJams", "JP")
newLibrary.addPlaylist(myPlaylist)
console.log(newLibrary)


