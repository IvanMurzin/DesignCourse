<script setup lang="ts"></script>

<template>
  <div class="substrate">
    <img v-for="idx in 3" :key="idx" src="@/assets/blob/blob_purple.svg" class="substrate_elem_purple" />
  </div>
</template>

<style lang="scss" scoped>
.substrate {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  .substrate_elem_purple {
    position: absolute;
    width: 100vmin;
    opacity: 1;

    &:nth-child(1) {
      transform: translate(-30%, -10%) rotate(0deg) scale(1);
    }

    &:nth-child(2) {
      transform: translate(55%, 25%) rotate(210deg) scale(0.9);
    }

    &:nth-child(3) {
      transform: translate(-40%, 120%) rotate(-25deg) scale(0.9);
    }
  }
}
</style>
