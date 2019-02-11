class Library {

  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlist = []
  }

  addPlaylist(playlist) {
    return this.playlist.push(playlist)
  }

}

class Playlist {

  constructor(name) {
    this.name = name;
    this.tracks = [];
    this.duration = 0;
    this.rating = 0;
  }

  addToTracks(track) {
    return this.tracks.push(track)
  }

  averageRating() {
    let avgRating = (this.tracks.reduce((a,b) => a += b.rating, 0) / this.tracks.length).toFixed(2);
    return this.rating = avgRating;
  }

  totalDuration() {
    let totalDuration = (this.tracks.reduce((a,b) => a += b.length, 0))
    return this.duration = totalDuration
  }

}

class Track {

  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  };
}

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