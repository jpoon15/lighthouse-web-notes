var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
  printPlaylists : function() {
    for (var values in this.playlists) {
      console.log(this.playlists[values].id + ": " + this.playlists[values].name + " - " + this.playlists[values].tracks.length + " tracks");
    }
  },
// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks : function() {
    for (var names in this.tracks) {
      console.log(this.tracks[names].id + ": " + this.tracks[names].name + " by " + this.tracks[names].artist + " (" + this.tracks[names].album + ")");
    }
  },

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist : function(playlistId) {
    var trackNumber = this.playlists[playlistId].tracks;
      console.log(this.playlists[playlistId].id + ": " + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks");
      for (var i = 0; i < trackNumber.length ; i++) {
        console.log(this.tracks[trackNumber[i]].id + ": " + this.tracks[trackNumber[i]].name + " by " + this.tracks[trackNumber[i]].artist + " (" + this.tracks[trackNumber[i]].album + ")");
      }
  },

// adds an existing track to an existing playlist

  addTrackToPlaylist : function(trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId)
    console.log(this.playlists[playlistId].tracks)
  },

  uid : function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
// adds a track to the library
  addTrack : function(name, artist, album) {
/*
To create a new object, identify the location you want to create it
then follow save format
*/
    var newId = this.uid();
    this.tracks[newId] = { id: newId,
                            name: name,
                            artist: artist,
                            album: album }

    console.log(this.tracks);
  },
// addTrackToPlaylist("t04", "p02");

// generates a unique id
// (use this for addTrack and addPlaylist)

  // adds a playlist to the library

  addPlaylist : function (name) {
  var newId = this.uid();
  this.playlists[newId] = { id: newId,
                               name: name }
  console.log(this.playlists);
  },
}
library.printPlaylists();

library.printTracks();

library.printPlaylist("p01");

library.addTrack("Charlie Brown", "Coldplay", "XY")

library.addPlaylist("Charlie Brown")


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}