<template>
  <svg class="svg-gradient" xmlns="http://www.w3.org/2000/svg">
    <linearGradient :id="id" x1="0%" y1="0%" x2="100%" y2="0%" :gradientTransform="`rotate(${rotate})`">
      <stop :stop-color="colorStart" offset="0%" />
      <stop :stop-color="colorEnd" offset="100%" />
    </linearGradient>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SvgGradient',
  props: {
    id: {
      type: String,
      required: true
    },
    colorStart: {
      type: String,
      required: true
    },
    colorEnd: {
      type: String,
      required: true
    },
    rotate: { default: 0 }
  }
})
</script>

<style scoped>
.svg-gradient {
  position: fixed;
  opacity: 0;
}
</style>
