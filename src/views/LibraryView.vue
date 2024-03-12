<template>
    <div class="p-8 overflow-x-hidden">
        <button class="text-white font-semibold text-2xl hover:underline underline-offset-auto "
            type="button">
            {{ artist.name }}
        </button>
        <div class="py-2"></div>
        <div class="w-full h-full flex items-center relative">
            <img width="160" :src="artist.albumCover" class="rounded-lg">
            <div class="ml-5 w-full">
                <div class="text-white absolute w-full hover:underline cursor-pointer top-0 text-5xl font-semibold">{{ artist.name }}</div>
                <div class="text-gray-300 text-sm flex font-semibold">
                    <div class="flex">Album . {{ artist.releaseYear }} . {{ artist.tracks.length }} </div>
                </div>
                <div class="absolute flex items-center justify-start bottom-0 mb-2 gap-4">
                    <button class="p-1 rounded-full bg-white">
                        <Play v-if="!isPlaying" fillColor="#181818" :size="25"/>
                        <Pause v-else fillColor="#181818" :size="25"/>
                    </button>         
                    <button type="button">
                        <Heart fillColor="#1BD760" :size="30"/>
                    </button>
                    <button type="button">
                        <DotsHorizontal fillColor="#FFFFFF" :size="25"/>
                    </button>   
                </div>
            </div>
        </div>

    </div>

</template>
<script setup>
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue';
import Heart from 'vue-material-design-icons/Heart.vue';
import ClockTimeThreeOutline from 'vue-material-design-icons/ClockTimeThreeOutline.vue';
// import artist from "./artist.json";
import artist from '../songs.json'
import SongRow from '../components/SongRow.vue'
import { ref } from 'vue';
const isPlaying = ref(false)
</script>