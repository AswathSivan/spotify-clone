<script setup>
import HomeCard  from '../components/HomeCard.vue'
</script>

<template>
    <div class="p-8">
        <button class="text-white font-semibold text-3xl hover:underline underline-offset-auto cursor-pointer" type="button">
            Podcast to make you smarter
        </button>
    </div>
    <div class="py-2"></div>
    <div class="flex items-center px-6">
            <HomeCard image="https://picsum.photos/id/30/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard image="https://picsum.photos/id/45/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="md:block hidden" image="https://picsum.photos/id/65/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="lg:block hidden"image="https://picsum.photos/id/67/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="xl:block hidden"image="https://picsum.photos/id/100/300/300" title="Title is here" subTitle="Subtitle is here" />
    </div>
    <div class="p-8">
        <button class="text-white font-semibold text-3xl hover:underline underline-offset-auto cursor-pointer" type="button">
            Recommended Songs
        </button>
    </div>
    <div class="py-2"></div>
    <div class="flex items-center px-6">
            <HomeCard image="https://picsum.photos/id/30/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard image="https://picsum.photos/id/45/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="md:block hidden" image="https://picsum.photos/id/65/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="lg:block hidden"image="https://picsum.photos/id/67/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="xl:block hidden"image="https://picsum.photos/id/100/300/300" title="Title is here" subTitle="Subtitle is here" />
    </div>
    <div class="p-8">
        <button class="text-white font-semibold text-3xl hover:underline underline-offset-auto cursor-pointer" type="button">
            Recommended Radio
        </button>
    </div>
    <div class="py-2"></div>
    <div class="flex items-center px-6">
            <HomeCard image="https://picsum.photos/id/30/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard image="https://picsum.photos/id/45/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="md:block hidden" image="https://picsum.photos/id/65/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="lg:block hidden"image="https://picsum.photos/id/67/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="xl:block hidden"image="https://picsum.photos/id/100/300/300" title="Title is here" subTitle="Subtitle is here" />
    </div>

</template>
