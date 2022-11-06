<script setup lang="ts">
import MainViewSubstrate from './widget/MainViewSubstrate.vue'
import MainViewHeader from './widget/MainViewHeader.vue'
import MainViewMainInfo from './widget/MainViewMainInfo.vue'
import MainViewAbout from './widget/MainViewAbout.vue'
</script>

<template>
  <div class="contraction abs">
    <main-view-header />
  </div>
  <div class="main-view contraction abs">
    <MainViewSubstrate />
    <div class="wrapper">
      <MainViewMainInfo />
      <MainViewAbout />
    </div>
  </div>
</template>


<style lang="scss">
.main-view {
  position: absolute;
  overflow: hidden;

  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
