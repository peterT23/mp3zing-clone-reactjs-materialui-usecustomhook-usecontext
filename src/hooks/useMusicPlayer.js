import { useContext, useState } from "react";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

const useMusicPlayer = () => {
  const { state, setState } = useContext(MusicPlayerContext);
  const [duration, setDuration] = useState(0);
  // const [currentTime, setCurrentTime] = useState(0);

  state.audioPlayer.addEventListener("loadeddata", () => {
    setDuration(state.audioPlayer.duration);
  });

  // const timecount = setInterval(() => {
  //   setCurrentTime(state.audioPlayer.currentTime);
  // }, 1000);

  // Play a specific track
  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      console.log("clicked");
      setDuration(state.audioPlayer.duration);

      togglePlay();
    } else {
      state.audioPlayer.pause();
      // setCurrentTime(0);
      state.audioPlayer = new Audio(state.tracks[index].file);

      state.audioPlayer.play();
      setState((state) => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      }));
      // clearInterval(timecount);
    }
    console.log(
      state.currentTrackIndex !== null &&
        state.tracks[state.currentTrackIndex].name
    );
  }

  // Toggle play or pause
  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause();
      // clearInterval(timecount);
    } else {
      state.audioPlayer.play();
    }
    setState((state) => ({ ...state, isPlaying: !state.isPlaying }));
  }

  // Play the previous track in the tracks array
  function playPreviousTrack() {
    const newIndex =
      (((state.currentTrackIndex + -1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length;
    playTrack(newIndex);
  }

  // Play the next track in the tracks array
  function playNextTrack() {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
  }

  return {
    state,
    setState,

    duration,
    playTrack,
    togglePlay,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    currentTrack: state.currentTrackIndex,
    // currentTrack:state.currentTrackIndex && state.tracks[state.currentTrackIndex],
    playPreviousTrack,
    playNextTrack,
  };
};

export default useMusicPlayer;
