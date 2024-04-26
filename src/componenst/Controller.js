import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, Slider, IconButton, Stack } from "@mui/material";

import { styled, useTheme } from "@mui/material/styles";

import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import useMusicPlayer from "../hooks/useMusicPlayer";

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

function Controller() {
  const {
    state,
    setState,

    duration,
    isPlaying,
    currentTrack,
    playTrack,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  const theme = useTheme();

  function formatDuration(value) {
    const minute = Math.floor(value / 60);

    const secondLeft = Math.floor(value - minute * 60);

    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === "light" ? "#fff" : "#000";
  const lightIconColor =
    theme.palette.mode === "light"
      ? "rgba(255,255,255,0.4)"
      : "rgba(0,0,0,0.4)";

  const volume = useRef(10);
  const [currentTime, setCurrentTime] = useState(state.audioPlayer.currentTime);

  useEffect(() => {
    // setCurrentTime(state.audioPlayer.currentTime);
    const timecount = setInterval(() => {
      setCurrentTime(state.audioPlayer.currentTime);
    }, 100);
    return () => {
      clearInterval(timecount);
    };
  }, [state.audioPlayer.currentTime]);

  // useEffect(() => {
  //   setCurrentTime(state.audioPlayer.currentTime);
  //   console.log("test if run useeffect");
  // }, [state.audioPlayer.currentTime]);

  return (
    <Box
      sx={{
        width: "80%",
      }}
    >
      <Slider
        aria-label="time-indicator"
        size="small"
        value={state.audioPlayer.currentTime}
        min={0}
        step={1}
        max={duration}
        onChange={(e) => {
          const newAudio = state.audioPlayer;
          newAudio.currentTime = e.target.value;
          console.log("newAudio", newAudio.currentTime);
          // clearInterval(timecount);
          // state.audioPlayer.currentTime = e.target.value;
          setState({ ...state, audioPlayer: newAudio });
        }}
        sx={{
          color: theme.palette.mode === "light" ? "#fff" : "rgba(0,0,0,0.87)",
          height: 4,
          "& .MuiSlider-thumb": {
            width: 8,
            height: 8,
            transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
            "&::before": {
              boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
            },
            "&:hover, &.Mui-focusVisible": {
              boxShadow: `0px 0px 0px 8px ${
                theme.palette.mode === "dark"
                  ? "rgb(255 255 255 / 16%)"
                  : "rgb(0 0 0 / 16%)"
              }`,
            },
            "&.Mui-active": {
              width: 20,
              height: 20,
            },
          },
          "& .MuiSlider-rail": {
            opacity: 0.28,
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: -2,
        }}
      >
        <TinyText>{formatDuration(currentTime)}</TinyText>
        <TinyText>-{formatDuration(duration - currentTime)}</TinyText>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: -1,
        }}
      >
        <IconButton aria-label="previous song" onClick={playPreviousTrack}>
          <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
        <IconButton
          aria-label={isPlaying ? "play" : "pause"}
          onClick={() => {
            // clearInterval(timecount);
            playTrack(currentTrack);
          }}
        >
          {!isPlaying ? (
            <PlayArrowRounded
              sx={{ fontSize: "3rem" }}
              htmlColor={mainIconColor}
            />
          ) : (
            <PauseRounded sx={{ fontSize: "3rem" }} htmlColor={mainIconColor} />
          )}
        </IconButton>
        <IconButton aria-label="next song" onClick={playNextTrack}>
          <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
      </Box>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1, px: 1 }}
        alignItems="center"
      >
        <VolumeDownRounded htmlColor={lightIconColor} />
        <Slider
          aria-label="Volume"
          defaultValue={5}
          value={volume.current}
          min={0}
          max={10}
          onChange={(e) => {
            // const newState = {state.audioPlayer.volume}

            console.log("event", e);

            const newAudio = state.audioPlayer;
            newAudio.volume = e.target.value / 10;
            volume.current = e.target.value;

            setState({ ...state, audioPlayer: newAudio });
            // setState({
            //   ...state,
            //   audioPlayer: { volume: e.target.value },
            // });
          }}
          sx={{
            color: theme.palette.mode === "light" ? "#fff" : "rgba(0,0,0,0.87)",
            "& .MuiSlider-track": {
              border: "none",
            },
            "& .MuiSlider-thumb": {
              width: 24,
              height: 24,
              backgroundColor: "#fff",
              "&::before": {
                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible, &.Mui-active": {
                boxShadow: "none",
              },
            },
          }}
        />
        <VolumeUpRounded htmlColor={lightIconColor} />
      </Stack>
    </Box>
  );
}

export default Controller;
