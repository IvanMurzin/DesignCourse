<script setup lang="ts">
import DynamicButton from '@/components/other/DynamicButton.vue'

</script>

<template>
  <div class="header">
    <a class="a" tabindex="1" href="https://figma.org">
      <img style="width: 100%" src="@/assets/logo/design_logo.svg" alt="design course logo" />
    </a>
    <div class="header_text"></div>
    <DynamicButton>Войти</DynamicButton>
    <a class="mephi_logo" tabindex="2" href="https://mephi.ru/">
      <img style="width: 100%" src="@/assets/logo/mephi_logo.svg" alt="mephi logo" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: grid;
  grid-template-columns: 6em 1fr auto 8em;
  grid-gap: 2em;
  align-items: center;
  padding-top: 2.5em;
  padding-bottom: 2.5em;
  max-width: 1250px;
  margin: 0 auto;

  @media screen and (max-width: 1300px) {
    padding-left: 5%;
    padding-right: 5%;
  }

  @media screen and (max-width: 1160px) {
    grid-gap: 3em;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
  }

  @media screen and (max-width: 600px) {
    grid-gap: 1em;
    padding-top: 1em;
    padding-bottom: 1em;
    grid-template-columns: 4em 1fr auto 6em;
  }

  .dynamic-btn {
    font-size: 1.5em;
    width: 140px;
    height: 45px;
    margin-right: 3em;

    @media screen and (max-width: 900px) {
      width: 120px;
      height: 35px;
      margin-right: 1em;
    }

    @media screen and (max-width: 600px) {
      width: 60px;
      height: 30px;
      font-size: 1.2em;
      margin-right: 0em;
    }

  }

  .header_text:before {
    content: 'UI/UX';
    font-family: "Roboto";
    font-style: normal;
    font-weight: 600;
    font-size: 4em;
    letter-spacing: 0.073em;
    color: white;
    -webkit-text-stroke: 2px #000;
    user-select: none;

    @media screen and (max-width: 1400px) {
      font-size: 3em;
    }

    @media screen and (max-width: 600px) {
      font-size: 2.8em;
    }
  }

  .header_text:after {
    content: 'Design Course';
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 4em;
    margin-left: 2%;
    letter-spacing: 0.05em;
    color: black;
    user-select: none;


    @media screen and (max-width: 1400px) {
      font-size: 3em;
    }

    @media screen and (max-width: 1100px) {
      content: '';
    }
  }
}
</style>
