<script setup lang="ts">
import MainViewSearchBar from '@/components/other/MainViewSearchBar.vue'
import logo from '@/assets/logo/design_logo.svg'

</script>

<template>
    <MainViewSearchBar>Приходи к нам, если ты...</MainViewSearchBar>
    <div class="invite_item">
        <img style="width: 100%" :src="logo" alt="" />
        <p class="invite_text">
            Всегда думал, что <b>уроки изобразительного искусства</b> в школе были чем-то особенным для тебя! 👨‍🎨
        </p>
    </div>
    <div class="invite_item">
        <img style="width: 100%" :src="logo" alt="" />
        <p class="invite_text">
            <b>Новичок в UI/UX дизайне</b>, и хочешь стать крутым специалистом в этой сфере! 🎨
        </p>
    </div>
    <div class="invite_item">
        <img style="width: 100%" :src="logo" alt="" />
        <p class="invite_text">
            <b>Хочешь</b> делать приятные глазу интерфейсы и создавать понятный пользовательский опыт! ✨
        </p>
    </div>
</template>

<style lang="scss" scoped>
.invite_item {
    display: grid;
    margin-top: 3em;
    grid-template-columns: 3.5em 1fr;
}

@media screen and (max-width: 900px) {
    .invite_text {
        font-size: 2.5em;
    }
}

@media screen and (max-width: 600px) {
    .invite_text {
        font-size: 2em;
    }
}

.invite_text {
    margin: -0.2em 0 0 1em;
    color: black;
    font-weight: 400;
    text-align: justify;
    font-size: 3em;
}
</style>
