<template>
    <div class="p-8 overflow-x-hidden">
        <button class="text-white font-semibold text-3xl hover:underline underline-offset-auto cursor-pointer"
            type="button">
            {{ artist.name }}
        </button>
        <div class="py-2"></div>
        <div class="w-full h-full flex items-center relative">
            <img width="180" :src="artist.albumCover">
            <div>
                <div class="text-white absolute w-full hover:underline cursor-pointer top-0 font-semibold">{{ artist.name }}</div>
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
</script>