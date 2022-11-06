<template>
    <button ref="root" class="gradient-btn" :disabled="disabled" onclick="this.blur()">
        <svg class="after" :key="key" :class="{ grey: grey || disabled }" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5em" y="0.5em" stroke-width="1em" fill="none" rx="3em" style="height: 100%; width: 100%" />
        </svg>
        <slot />
    </button>
</template>
  
<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

export default defineComponent({
    name: 'GradientButton',
    props: {
        grey: { default: false },
        disabled: { default: false },
        divMode: { default: false }
    },
    setup() {
        const key = ref(0)
        const root = ref() as Ref<HTMLElement>

        const resizeObserver = new ResizeObserver(() => key.value++)
        onMounted(() => resizeObserver.observe(root.value))
        onBeforeUnmount(() => resizeObserver.disconnect())

        return { key, root }
    }
})
</script>
  
<style scoped>
button {
    position: relative;
    background: white;
    padding: 0.4em 1.6em;
    font-size: 1.4em;
    cursor: pointer;
    border: 0 solid #00000000;
    box-sizing: content-box;
}

.after {
    background: red;
    position: absolute;
    height: 100%;
    width: 100%;
}

@media screen and (max-width: 900px) {
    button {
        font-size: 1.2em;
        padding: 0.4em 1.2em;
        --border-width: 1.5px;
    }
}

@media screen and (max-width: 20em),
screen and (max-height: 20em) {
    button {
        padding: 0.2em 1.6em;
        --border-width: 1px;
    }
}
</style>
  