<script setup lang="ts">
import MainViewSubstrate from './widget/MainViewSubstrate.vue'
import MainViewHeader from './widget/MainViewHeader.vue'
import MainViewMainInfo from './widget/MainViewMainInfo.vue'
import MainViewAbout from './widget/MainViewAbout.vue'
import MainViewWhatInside from './widget/MainViewWhatInside.vue'
import MainViewInvite from './widget/MainViewInvite.vue'
import MainViewSubscribe from './widget/MainViewSubscribe.vue'
import MainViewFooter from './widget/MainViewFooter.vue'
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
      <MainViewWhatInside />
      <MainViewInvite />
      <MainViewSubscribe />
      <MainViewFooter />
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
