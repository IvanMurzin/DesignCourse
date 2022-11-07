<template>
    <button ref="root" class="dynamic-btn" onclick="this.blur()">
        <slot />
    </button>
</template>
  
<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

export default defineComponent({
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
  
<style scoped  lang="scss">
$border: 2px;
$offset: 10px;

button {
    font-size: 1.3em;
    position: relative;
    border: $border solid black;
    background-color: white;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: white;
        border: $border solid black;
        z-index: -1;
        transition: transform 0.5s;
    }

    &::after {
        left: -$offset;
        bottom: -$offset;
    }

    &::before {
        left: -2 * $offset + $border;
        bottom: -2 * $offset + $border;
    }


    &:hover {
        &::before {
            transform: translate3d($offset+3*$border , -$offset - 3* $border , 0);
        }

        &::after {
            transform: translate3d($offset - $border, -$offset + $border, 0);
        }
    }

}
</style>
  