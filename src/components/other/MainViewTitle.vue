<script setup lang="ts">
defineProps<{
    name: string
}>()
</script>

<template>
    <section>
        <h2 class="main_title">{{ name }}</h2>
        <slot />
    </section>
</template>

<style lang="scss" scoped>
section {
    .main_title {
        font-size: 6em;
        color: black;
        font-weight: 600;
        margin: 0.3em 0 0.2em;
    }

    @media screen and (max-width: 900px) {
        .main_title {
            font-size: 4em;
        }
    }
}
</style>
