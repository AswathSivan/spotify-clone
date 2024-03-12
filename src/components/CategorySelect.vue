<template>
    <RouterLink to="library">
        <div v-if="randColor.color" :style="`background-color : ${ randColor.color }`" class="aspect-square rounded-xl relative overflow-hidden">
            <div class="text-white p-3 font-semibold text-[23px]">{{ category }}</div>
            <img :src=" image || '' " alt="image" class="absolute rotate-[20deg] max-w-[120px] rounded-xl -right-3.5  bottom-0">
        </div>
    </RouterLink>
</template>
<script setup>
import { ref, toRefs } from 'vue'
import { RouterLink } from 'vue-router';
import uniqolor from 'uniqolor';
let randColor = ref('')
randColor.value = uniqolor.random()

const props = defineProps({ category: String, image: String })
const { category } = toRefs(props)
</script>