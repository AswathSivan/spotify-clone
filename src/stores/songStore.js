import { ref, computed } from "vue";
import { defineStore } from "pinia";
import artist from '../songs.json'
export const useSongStore = defineStore(
  "songStore",
  () => {
    const isPlaying = ref(false);
    const audio = ref(null);
    const currentArtist = ref(null);
    const currentTrack = ref(null);

    function loadSong(artist, track) {
      currentArtist.value = artist;
      currentTrack.value = track;

      if (audio.value && audio.value.src) {
        audio.value.pause();
        isPlaying.value = false;
        audio.value.src = "";
      }
      audio.value = new Audio();
      audio.value.src = track.path;

      setTimeout(() => {
        isPlaying.value = true;
        audio.value.play();
      }, 200);
    }

    function playOrPauseSong() {
      if (audio.value.paused) {
        isPlaying.value = true;
        audio.value.play();
      } else {
        isPlaying.value = false;
        audio.value.pause();
      }
    }

    function playOrPauseThisSong(artist, track) {
      if (
        !audio.value ||
        !audio.value.src ||
        (currentTrack.value.id !== track.id)
      ) {
        loadSong(artist, track);
        return;
      }
      playOrPauseSong();
    }

    function prevSong(currentTrack) {
      let track = artist.tracks[currentTrack.id - 2];
      loadSong(artist, track);
    }

    function nextSong(currentTrack) {
      if (currentTrack.id === artist.tracks.length) {
        let track = artist.tracks[0];
        loadSong(artist, track);
      } else {
        let track = artist.tracks[currentTrack.id];
        loadSong(artist, track);
      }
    }

    function playFromFirst() {
      resetState();
      let track = artist.tracks[0];
      loadSong(artist, track);
    }

    function resetState() {
      isPlaying.value = false;
      audio.value = null;
      currentArtist.value = null;
      currentTrack.value = null;
    }

    return {
      isPlaying,
      audio,
      currentArtist,
      currentTrack,
      loadSong,
      prevSong,
      nextSong,
      resetState,
      playFromFirst,
      playOrPauseSong,
      playOrPauseThisSong,
    };
  },
  { persist: true }
);
