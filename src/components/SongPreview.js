import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

//This is the preview component. The data of the chosen track is passed here via props and displayed here once again.
function SongPreview(props) {
  const location = useLocation();
  const song = location.state;
  const navigate = useNavigate();

  return (
    <div className="w-75 mx-auto mt-3 text-center border border-light rounded">
      <h2 className="text-white m-2">{song.artistName}</h2>
      <div>
        <img src={song.artworkUrl100} alt="artwork" />
        <div className="text-white m-2">Track Name: {song.trackName}</div>
      </div>

      <div className="border border-light rounded">
        {/*This code is for the audio and video that is displayed in the media window of the preview function/component*/}
        {song.kind === "song" ? (
          <audio controls="controls" autoPlay="autoPlay">
            <source src={song.previewUrl} type="audio/mp4" />
          </audio>
        ) : (
          <video controls="controls" width={600} autoPlay="autoPlay">
            <source src={song.previewUrl} type="video/mp4" />
            Your browser does not support this video.
          </video>
        )}
      </div>

      <div className="flex">
        <button
          className="btn btn-outline-light m-2"
          onClick={() => navigate(-1)}
        >
          Back to Search list
        </button>

        <FavoriteButton
          trackName={song?.trackName}
          artistName={song?.artistName}
          trackPrice={song?.trackPrice}
          currency={song?.currency}
          artworkUrl100={song?.artworkUrl100}
          previewUrl={song?.previewUrl}
        />
      </div>
    </div>
  );
}

export default SongPreview;
