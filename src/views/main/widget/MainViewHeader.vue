<script setup lang="ts">
import GradientButton from '@/components/other/GradientButton.vue'

</script>

<template>
  <div class="header">
    <a class="a" tabindex="1" href="https://kotlinlang.org/">
      <img style="width: 100%" src="@/assets/logo/design_logo.svg" alt="design course logo" />
    </a>
    <div class="header__dc"></div>
    <GradientButton @click="">Войти</GradientButton>
    <div class="sized_box"></div>
    <a class="a" tabindex="2" href="https://mephi.ru/">
      <img style="width: 100%" src="@/assets/logo/mephi_logo.svg" alt="mephi logo" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 6em 2fr auto 2em 10em;
  grid-gap: 2em;
  align-items: center;
  margin-top: 2.5em;
  margin-bottom: 2.5em;

  @media screen and (max-width: 1160px) {
    grid-gap: 3em;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
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
    font-size: 4em;
    letter-spacing: 0.073em;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    user-select: none;

    @media screen and (max-width: 1160px) {
      content: 'UI/UX';
    }
    @media screen and (max-width: 1400px) {
      font-size: 3em;
    }
  }

  .header__dc:after {
    content: 'Design Course';
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 4em;
    margin-left: 2%;
    letter-spacing: 0.05em;
    color: black;
    user-select: none;

    @media screen and (max-width: 1160px) {
      content: '';
    }
    @media screen and (max-width: 1400px) {
      font-size: 3em;
    }
  }


  .gradient-btn {
    background: transparent;
  }
}
</style>
