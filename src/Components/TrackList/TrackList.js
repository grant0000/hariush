import React from "react";
import "./TrackList.css";

import { Track } from "../Track/Track";

export class TrackList extends React.Component {
  // const tracks = this.props.tracks.map((item) =>
  // //expression goes here
  // const track = item.name
  // const artist = item.artist
  // const album = item.album
  // );

  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map((track) => {
          return <Track key={track.id} track={track} />;
        })}
      </div>
    );
  }
}
