<script setup lang="ts">
import GradientButton from '@/components/other/GradientButton.vue'
import { useCustomScroll } from '@/use/customScroll'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { onBeforeMount } from 'vue'

</script>

<template>
  <div class="header">
    <a class="a" tabindex="1" href="https://kotlinlang.org/">
      <img style="width: 130%" src="@/assets/logo/design_logo.svg" alt="design course logo" />
    </a>
    <div class="header__dc"></div>
    <GradientButton @click="">Войти</GradientButton>
    <a class="a" tabindex="2" href="https://mephi.ru/">
      <img style="width: 100%" src="@/assets/logo/mephi_logo.svg" alt="mephi logo" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 4em 2fr auto 6.875em;
  grid-gap: 5em;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 2em;

  @media screen and (max-width: 1160px) {
    grid-gap: 3em;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  @media screen and (max-width: 600px) {
    grid-gap: 2em;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .header__dc:before {
    content: 'UI/UX';
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 3.5em;
    letter-spacing: 0.073em;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    user-select: none;

    @media screen and (max-width: 1160px) {
      content: 'UI/UX';
    }
  }

  .header__dc:after {
    content: 'Design Course';
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 3.5em;
    margin-left: 1%;
    letter-spacing: 0.05em;
    color: black;
    user-select: none;

    @media screen and (max-width: 1160px) {
      content: '';
    }
  }


  .gradient-btn {
    background: transparent;
  }
}
</style>
