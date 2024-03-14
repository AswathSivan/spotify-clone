<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";

import ChevronUp from "vue-material-design-icons/ChevronUp.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";
import MenuItem from "./components/MenuItem.vue"
import MusicPlayer from './components/Musicplayer.vue'
const openmenu = ref(false)
</script>

<template>
  <div>
    <div
      id="navBar"
      class="w-[calc(100%-250px)] h-[60px] mx-4 fixed right-0 z-20 bg-black bg-opacity-60 flex items-center justify-between">
      <div class="flex items-center ml-6">
        <button type="button" class="rounded-full bg-black p-[1px] cursor-pointer">
          <ChevronLeft :size="30" fillColor="#ffffff"></ChevronLeft>
        </button>
        <button type="button" class="rounded-full bg-black p-[1px] ml-4 cursor-pointer">
          <ChevronRight :size="30" fillColor="#ffffff"></ChevronRight>
        </button>
      </div>
      <button class="bg-black hover:bg-[#282828] rounded-full mr-8 p-1  cursor-pointer" @click="openmenu = !openmenu"
        :class="openmenu ? 'bg-[#282828]' : 'bg-black'">
        <div class="flex items-center">
          <img src="/public/favicon.png" width="27" alt="profile image" class="rounded-full">
          <div class="text-white text-[14px] ml-1.5 font-semibold">Aswath Sivan P</div>
          <ChevronDown v-if="!openmenu" @click="openmenu = true" fillColor="#ffffff" :size="25"></ChevronDown>
          <ChevronUp v-else @click="openmenu = true" fillColor="#ffffff" :size="25"></ChevronUp>
        </div>
      </button>
      <span v-if="openmenu" class="fixed w-[190px] bg-[#282828] shadow-2xl rounded-xl top-[52px] right-[35px]">
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="p-3 hover:bg-[#3E3D3D]">Profile</li>
          <li class="p-3 hover:bg-[#3E3D3D] rounded-xl">Logout</li>
        </ul>
      </span>
    </div>
    <div id="sideNav" class="h-full p-6 w-[240px] fixed z-50 bg-black">
      <router-link to="/">
        <img src="/public/images/icons/spotify-logo.png" alt="logo" width="125">
      </router-link>
      <div class="py-4"></div>
      <ul>
        <RouterLink to="/">
          <MenuItem class="ml-[1px]" :iconSize="23" name="Home" iconString="home" pageUrl="/">
          </MenuItem>
        </RouterLink>
        <RouterLink to="/search">
          <MenuItem class="ml-[1px]" :iconSize="23" name="Search" iconString="search" pageUrl="/search">
          </MenuItem>
        </RouterLink>
        <RouterLink to="/library">
          <MenuItem class="ml-[1px]" :iconSize="23" name="Library" iconString="library" pageUrl="/library">
          </MenuItem>
        </RouterLink>
      </ul>
      <div class="py-4"></div>
      <MenuItem class="ml-[1px]" :iconSize="25" name="Create Playlist" iconString="playlist" pageUrl="/playlist">
      </MenuItem>
      <MenuItem class="ml-[1px]" :iconSize="27" name="Liked Songs" iconString="liked" pageUrl="/liked">
      </MenuItem>
      <div class="border-b border-b-gray-700 py-2"></div>
      <ul>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #1</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #2</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #3</li>
        <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #4</li>
      </ul>
    </div>
  </div>
  <div
        class="
            fixed
            right-0
            w-[calc(100%-240px)]
            overflow-auto
            h-full
            bg-gradient-to-b
            from-[#1C1C1C]
            to-black
            z-10
            
        "
    >
        <div class="mt-[70px]"></div>
        <RouterView />
        <div class="mb-[100px]"></div>
    </div>
    <MusicPlayer></MusicPlayer>
</template>

<style scoped></style>
