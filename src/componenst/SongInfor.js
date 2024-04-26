import React from "react";
import { Paper, Typography, Stack, Avatar } from "@mui/material";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import useMusicPlayer from "../hooks/useMusicPlayer";

function SongInfor() {
  const {
    trackList,
    currentTrackName,

    currentTrack,
    // currentTrack,
  } = useMusicPlayer();

  return (
    <Paper elevation={6} sx={{ width: "80%", background: "transparent" }}>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          borderBottom: "2px solid rgb(200,200,181)",
          padding: "2px",
          paddingBottom: "10px",
        }}
      >
        <Avatar
          sx={{
            margin: "2px",
            width: "80px",
            height: "80px",
            borderRadius: "5px",
          }}
          alt={currentTrackName}
          src={currentTrack !== null ? trackList[currentTrack].img : ""}
          variant="square"
        />
        <div>
          <Typography color="white" variant="subtitle1">
            {currentTrackName}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "rgb(200, 200, 181);" }}>
            {trackList[currentTrack].singer}
          </Typography>
          <Stack component="div" direction="row" spacing={5}>
            <div style={{ display: "flex" }}>
              <FavoriteBorderOutlinedIcon
                sx={{ color: "rgb(200,200,200)", width: "20px" }}
              />
              <Typography
                variant="subtitle2"
                sx={{ color: "rgb(200, 200, 181);" }}
              >
                {trackList[currentTrack].like}
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <HeadphonesOutlinedIcon
                sx={{ color: "rgb(200,200,200)", width: "19px" }}
              />
              <Typography
                variant="subtitle2"
                sx={{ color: "rgb(200, 200, 181);" }}
              >
                {trackList[currentTrack].like}
              </Typography>
            </div>
          </Stack>
        </div>
      </Stack>

      <Stack>
        <div style={{ display: "flex", gap: "10px" }}>
          <Typography variant="subtitle1" sx={{ color: "rgb(200, 200, 181);" }}>
            Nhạc sĩ
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "white" }}>
            {trackList[currentTrack].musician}
          </Typography>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <Typography variant="subtitle1" sx={{ color: "rgb(200, 200, 181);" }}>
            Thể loại
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "white" }}>
            {trackList[currentTrack].type}
          </Typography>
        </div>
      </Stack>
    </Paper>
  );
}

export default SongInfor;
