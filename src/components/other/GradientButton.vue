<template>
  <button ref="root" class="gradient-btn" :disabled="disabled" onclick="this.blur()">
    <svg class="after" :key="key" :class="{ grey: grey || disabled }" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5em" y="0.5em" stroke-width="1em" fill="none" rx="3em"
        style="height: calc(100% - 1em); width: calc(100% - 1em)" />
    </svg>
    <div v-if="divMode" style="height: 100%; padding: 0.1em !important">
      <slot />
    </div>
    <span v-else>
      <slot />
    </span>
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
  --border-width: 2px;
  position: relative;
  background: white;
  padding: 0.4em 1.6em;
  font-size: 1.4em;
  cursor: pointer;
  border: calc(1.5 * var(--border-width)) solid #00000000;
  border-radius: calc(3 * var(--border-width));
  box-sizing: content-box;
  outline: 0 !important;
}

button:before,
.after {
  position: absolute;
  height: 100%;
  width: 100%;
  transition: transform 0.3s, opacity 0.3s;
}

button:before {
  content: '';
  border: var(--border-width) solid black;
  box-sizing: border-box;
  top: calc(-1.5 * var(--border-width));
  left: calc(1.5 * var(--border-width));
}

.after {
  content: '';
  border: var(--border-width) solid black;
  box-sizing: border-box;
  top: calc(1.5 * var(--border-width));
  left: calc(-1.5 * var(--border-width));
}


.grey {
  stroke: #b3b3b3;
}

@media (hover) {
  button:hover:before {
    transform: translate3d(calc(-1.5 * var(--border-width)), calc(1.5 * var(--border-width)), 0);
  }

  button:hover .after {
    transform: translate3d(calc(1.5 * var(--border-width)), calc(-1.5 * var(--border-width)), 0);
  }
}

button:focus:before,
button:active:before {
  opacity: 0;
}

button:focus .after,
button:active .after {
  transform: translate3d(calc(1.5 * var(--border-width)), calc(1.5 * var(--border-width)), 0);
}

button:active:before,
button:active .after {
  transition: 0s;
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
