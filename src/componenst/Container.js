import React from "react";
import { Typography } from "@mui/material";
import TrackList from "./TrackList";
import Controller from "./Controller";
import SongInfor from "./SongInfor";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import useMusicPlayer from "../hooks/useMusicPlayer";

function Container() {
  const { currentTrack } = useMusicPlayer();

  return (
    <div>
      <div className="container">
        <Typography
          sx={{ fontFamily: "Arial", textAlign: "center", paddingTop: "10px" }}
        >
          Clone MP3 Zing App
        </Typography>
        <LibraryMusicOutlinedIcon />
        {currentTrack !== null ? <SongInfor /> : ""}
        {/* <SongInfor /> */}
        <TrackList />
        {currentTrack !== null ? <Controller /> : ""}
      </div>
    </div>
  );
}

export default Container;
