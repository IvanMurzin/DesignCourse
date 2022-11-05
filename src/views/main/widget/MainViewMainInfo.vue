<script setup lang="ts">
import IconListItem from '@/components/other/IconListItem.vue'
import MainViewTitle from '@/components/other/MainViewTitle.vue'
</script>

<template>
    <main-view-title name="Design Course">
        <div class="offers">
            <IconListItem>Продолжительность: 10 недель</IconListItem><br>
            <IconListItem>Основы UI/UX дизайна</IconListItem><br>
            <IconListItem>Навыки профессиональной работы в Figma</IconListItem><br>
        </div>
    </main-view-title>
</template>

<style lang="scss" scoped>
.offers {

    @media screen and (max-width: 900px) {
        margin-right: 0;
    }
}
</style>
