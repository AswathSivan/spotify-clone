<template>
    <div id="musicPlayer"
        class="fixed flex items-center justify-between bottom-0 w-full z-50 h-[90px] bg-[#181818] border-t border-t-[#272727]">
        <div class="flex items-center w-1/4">
            <div class="flex items-center ml-4">
                <img :src="currentArtist.albumCover" alt="cover" width="60" class="rounded-sm shadow-2xl">
                <div class="ml-4">
                    <div class="text-white text-[14px] hover:underline cursor-pointer">
                        {{ currentArtist.name }}
                    </div>
                    <div class="text-gray-500 text-[11px] hover:underline hover:text-white cursor-pointer">
                        {{ currentArtist.releaseYear }}
                    </div>
                </div>
            </div>
            <div class="flex items-center ml-8">
                <Heart fillColor="#1BD760" :size="20" />
                <PictureInPictureBottomRight class="ml-4" fillColor="#FFFFFF" :size="18" />
            </div>
        </div>
        <div class="mx-auto max-2-[35%] 2-2/4 mb-3">
            <div class="flex-col items-center justify-center">
                <div class="buttons flex items-center justify-center h-[30px]">
                    <button class="mx-2">
                        <SkipBackward fillColor="#FFFFFF" :size="25" @click="useSong.prevSong(currentTrack)" />
                    </button>
                    <button class="p-1 rounded-full mx-3 bg-white"
                        @click="useSong.playOrPauseThisSong(currentArtist, currentTrack)">
                        <Play v-if="!isPlaying" fillColor="#181818" :size="25" />
                        <Pause v-else fillColor="#181818" :size="25" />
                    </button>
                    <button class="mx-2">
                        <SkipForward fillColor="#FFFFFF" :size="25" @click="useSong.nextSong(currentTrack)" />
                    </button>

                </div>
                <div class="flex items-center h-[25px]">
                    <div class="text-white text-[12px] pr-2 pt-[11px]" v-if="isTrackTimeCurrent">{{ isTrackTimeCurrent
                        }}</div>
                    <div class="w-full relative mt-2 mb-3" ref="seekerContainer" @mouseenter="isHover = true"
                        @mouseleave="isHover = false">

                        <input type="range"
                            class="absolute rounded-full my-2 w-full h-1 z-40 appearance-none bg-opacity-100 focus:outline-none accent-white">
                    </div>
                </div>
            </div>


        </div>


    </div>
</template>
<script setup>
import { ref, watch, onMounted } from 'vue'
// import MusicPlayerVolume from '../components/MusicPlayerVolume.vue'
import Heart from 'vue-material-design-icons/Heart.vue';
import PictureInPictureBottomRight from 'vue-material-design-icons/PictureInPictureBottomRight.vue';
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import SkipBackward from 'vue-material-design-icons/SkipBackward.vue';
import SkipForward from 'vue-material-design-icons/SkipForward.vue';

import { useSongStore } from '@/stores/songStore';
import { storeToRefs } from 'pinia';
const useSong = useSongStore()
const { isPlaying, audio, currentTrack, currentArtist } = storeToRefs(useSong)

let isHover = ref(false)
let isTrackTimeCurrent = ref(null)
let isTrackTimeTotal = ref(null)
let seeker = ref(null)
let seekerContainer = ref(null)
let range = ref(0)
</script>