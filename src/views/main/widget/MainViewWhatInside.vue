<script setup lang="ts">
import BorderedItem from '@/components/other/BorderedItem.vue'
</script>

<template>
    <div class="section">
        <h2 class="title_info">Что входит в курс?</h2>
        <div class="learning-order">
            <BorderedItem style="grid-area: a" title="Designer`s toolkit">
                Основной набор инструментов для работы с дизайном пользовательских интерфейсов
            </BorderedItem>
            <BorderedItem style="grid-area: b" title="Design basics">
                Колористика, типографика, композиция
            </BorderedItem>
            <BorderedItem style="grid-area: c" title="Figma basics">
                Основы Figma, адаптивный дизайн, моушн-дизайн, создание интерактивных прототипов
            </BorderedItem>
            <BorderedItem style="grid-area: d" title="Практические задания">
                В рамках курса студенты собирают своё собственное портфолио дизайнера
            </BorderedItem>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.title_info {
    font-size: 3.8em;
    color: black;
    font-weight: 600;
    margin: 0.3em 0 0.2em;

    @media screen and (max-width: 600px) {
        font-size: 2em;
    }
}

.section {
    color: white;
    margin-left: 1em;
    margin-top: 5em;
}

.learning-order {
    width: 100%;
    margin-top: 6em;
    margin-bottom: 2em;
    display: grid;
    grid-gap: 8em 10em;
    grid-template-rows: auto auto auto auto;
    grid-template:
        'a   b' auto
        'c   d' auto/
        1fr 1fr;
    align-items: center;

    @media screen and (max-width: 900px) {
        margin: 2em auto;
        grid-gap: 4em 6em;
        grid-template-columns: 1fr 1fr;
    }
}
</style>
