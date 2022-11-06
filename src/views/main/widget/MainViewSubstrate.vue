<script setup lang="ts"></script>

<template>
  <div class="substrate">
    <img src="@/assets/blob/blob_purple1.svg" class="substrate_elem"
      style="transform: translate(-25%, -45%) rotate(0deg) scale(1);" />
    <img src="@/assets/blob/blob_purple2.svg" class="substrate_elem"
      style="transform: translate(10%, 55%) rotate(0deg) scale(0.8);" />
    <img src="@/assets/blob/blob_purple3.svg" class="substrate_elem"
      style="transform: translate(-35%, 160%) rotate(15deg) scale(1.5);" />
    <img src="@/assets/blob/blob_green1.svg" class="substrate_elem"
      style="transform: translate(-10%, -20%) rotate(0deg) scale(0.5);" />
    <img src="@/assets/blob/blob_green2.svg" class="substrate_elem"
      style="transform: translate(30%, 18%) rotate(0deg) scale(0.4);" />
    <img src="@/assets/blob/blob_green3.svg" class="substrate_elem"
      style="transform: translate(20%, 55%) rotate(0deg) scale(0.6);" />
    <img src="@/assets/blob/blob_blue1.svg" class="substrate_elem"
      style="transform: translate(-50%, 30%) rotate(0deg) scale(0.7);" />
    <img src="@/assets/blob/blob_blue2.svg" class="substrate_elem"
      style="transform: translate(-30%, 190%) rotate(0deg) scale(0.5);" />
    <img src="@/assets/blob/blob_blue2.svg" class="substrate_elem"
      style="transform: translate(40%, 400%) rotate(0deg) scale(3);" />
  </div>
</template>

<style lang="scss" scoped>
.substrate {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;

  .substrate_elem {
    position: absolute;
    opacity: 1;
    width: 100%;
  }
}
</style>
