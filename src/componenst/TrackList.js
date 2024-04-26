import React from "react";
import {
  Paper,
  Card,
  Box,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Stack,
} from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import useMusicPlayer from "../hooks/useMusicPlayer";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import PauseRounded from "@mui/icons-material/PauseRounded";

function TrackList() {
  const { trackList, currentTrack, playTrack, isPlaying } = useMusicPlayer();

  const handlePlayTrack = (index) => {
    playTrack(index);
  };

  return (
    <Paper
      elevation={0}
      component="div"
      sx={{
        width: "80%",
        background: "transparent",
        overflow: "scroll",
        height: "auto",
      }}
    >
      <Typography variant="subtitle1" color="white">
        Danh sách bài hát
      </Typography>
      {trackList.map((track, index) => (
        <Stack
          key={`${track.name}${index}`}
          direction="row"
          spacing={2}
          sx={{
            padding: "2px",
            paddingBottom: "10px",
          }}
        >
          <div
            className={
              isPlaying && currentTrack === index ? "isplaying" : "track"
            }
            onClick={() => handlePlayTrack(index)}
            style={{
              padding: "0 5px",
              width: "100%",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Avatar
                sx={{
                  margin: "2px",
                  width: "35px",
                  height: "35px",
                  borderRadius: "5px",
                }}
                alt="currentTrackName"
                src={track.img}
                variant="square"
              />

              <div>
                <Typography
                  variant="subtitle1"
                  color="white"
                  sx={{ fontWeight: "bold" }}
                >
                  {track.name}
                </Typography>
                <Typography
                  color="rgb(200,200,200)"
                  sx={{ fontWeight: "bold", fontSize: "0.85rem" }}
                >
                  {track.singer}
                </Typography>
              </div>
            </div>
            <div>
              {/* <PauseCircleOutlineOutlinedIcon
                sx={{
                  width: "30px",
                  height: "30px",

                  color: "white",
                }}
              /> */}
              <IconButton
                aria-label={
                  isPlaying && currentTrack === index ? "play" : "pause"
                }
                // onClick={() => setPaused(!paused)}
              >
                {isPlaying && currentTrack === index ? (
                  <PauseRounded sx={{ fontSize: "1.5rem", color: "white" }} />
                ) : (
                  <PlayArrowRounded
                    sx={{ fontSize: "1.5rem", color: "white" }}
                  />
                )}
              </IconButton>
            </div>
          </div>
        </Stack>
      ))}
    </Paper>
  );
}

export default TrackList;
