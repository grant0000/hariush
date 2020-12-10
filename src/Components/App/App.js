import React from "react";
import "./App.css";

import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "New Playlist",
      playlistTracks: [],
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((element_in_object) => element_in_object.ID === track.ID)) {
      return;
    } else {
      tracks.push(track);
      this.setState({
        playlistTracks: tracks,
      });
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find((element_in_object) => element_in_object.ID === track.ID)) {
      tracks.pop(track);
      this.setState({
        playlistTracks: tracks,
      });
    } else {
      return;
    }
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name,
    });
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map((track) => track.URI);
    Spotify.savePlaylist(this.state.playlistName, trackUris)
      .then(() => {
        this.setState({
          playlistName: "New Playlist",
          playlistTracks: [],
        });
      })
      .catch(console.log("holy shit youre retarded hahahahaha"));
  }

  search(term) {
    Spotify.search(term).then((searchResults) => {
      this.setState({
        searchResults: searchResults,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>
          Ha<span className="highlight">riu</span>sh
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              searchResults={this.state.searchResults}
            />
            <Playlist
              onSave={this.savePlaylist}
              onNameChange={this.updatePlaylistName}
              onRemove={this.removeTrack}
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
