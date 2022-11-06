<script setup lang="ts">
import IconListItem from '@/components/other/IconListItem.vue'
import MainViewSearchBar from '@/components/other/MainViewSearchBar.vue'
</script>

<template>
    <MainViewSearchBar>Приходи к нам, если ты...</MainViewSearchBar>
    <!-- <div class="offers"> -->
        <!-- <IconListItem>Продолжительность: 10 недель</IconListItem><br>
        <IconListItem>Основы UI/UX дизайна</IconListItem><br>
        <IconListItem>Навыки профессиональной работы в Figma</IconListItem><br>
    </div> -->
</template>

<style lang="scss" scoped>
.offers {

    @media screen and (max-width: 900px) {
        margin-right: 0;
    }
}
</style>
