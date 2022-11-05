<script setup lang="ts">
defineProps<{
    name: string
}>()
</script>

<template>
    <section>
        <h2 class="section-name">{{ name }}</h2>
        <div class="delimiter" />
        <slot />
    </section>
</template>

<style lang="scss" scoped>
section {
    .section-name {
        font-size: 6em;
        color: black;
        font-weight: 600;
        margin: 0.3em 0 0.2em;
    }

    @media screen and (max-width: 900px) {
        .section-name {
            font-size: 4em;
        }

    }
}
</style>
