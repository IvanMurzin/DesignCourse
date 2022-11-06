<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
<template>
  <div class="item">
    <h2 class="item__title">{{ title }}</h2>
    <span class="item__text">
      <slot />
    </span>
  </div>
</template>

<style scoped>
.item {
  position: relative;
  display: inline-block;
  padding-top: 0em;
  padding-left: 3em;
  padding-right: 3em;
  padding-bottom: 2em;
  border: 2px solid black;
  box-shadow: -10px 10px black;
  background: white;
  height: 100%;
  box-sizing: border-box;
}


.item__title {
  font-weight: 600;
  font-size: 2em;
  margin-bottom: 0.3em;
  margin-top: 0.8em;
  color: black;
}

.item__text {
  font-weight: 400;
  letter-spacing: 0.03em;
  font-size: 1.5em;
  line-height: 1.3;
  color: black;
}

@media screen and (max-width: 1160px) {
  .item {
    height: auto;
  }
}

@media screen and (max-width: 900px) {
  .item {
    font-size: 0.8em;
  }

  .item__title {
    font-size: 1.6em;
  }
}
</style>
