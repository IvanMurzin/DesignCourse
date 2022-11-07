<template>
  <div class="item">
    <img style="width: 100%" :src="logo" alt="" />
    <p class="item_text">
      <slot />
    </p>
  </div>
</template>
  
<script setup lang="ts">
import logo from '@/assets/logo/design_logo.svg'

</script>
  
<style scoped>
.item {
  display: grid;
  align-items: center;
  grid-template-columns: 3.5em 1fr;
}

.item_text {
  margin: 0 0 0 1em;
  color: black;
  font-weight: 600;
  font-size: 3em;
}

@media screen and (max-width: 900px) {
  .item_text {
    font-size: 2.5em;
  }
}

@media screen and (max-width: 600px) {
  .item_text {
    font-size: 2em;
  }
}
</style>
  