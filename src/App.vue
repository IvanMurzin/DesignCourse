<template>
  <NConfigProvider :theme-overrides="themeOverrides" preflight-style-disabled>

    <n-global-style />
    <div style="position: relative">
      <router-view v-slot="{ Component }">
        <transition name="slide">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </NConfigProvider>
  <SvgGradient :id="'bgrad'" :colorStart="'#f212ef'" :colorEnd="'#29c4f8'" :rotate="15" />
</template>

<script setup lang="ts">
import SvgGradient from '@/components/other/SvgGradient.vue'
import { NConfigProvider, type GlobalThemeOverrides, NGlobalStyle } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily: 'Montserrat',
    fontFamilyMono: 'Montserrat'
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

b {
  font-weight: 600;
}

body {
  background: #fefefe;
  overflow-y: scroll;
  margin: 0;
}

#app {
  font-weight: 500;
}

@media screen and (max-height: 30em),
screen and (max-width: 30em) {
  #app {
    font-size: 0.6em;
  }
}

img,
svg {
  user-select: none;
  pointer-events: none;
}

button,
a {
  -webkit-tap-highlight-color: #00000000;
}

a {
  position: relative;
  outline: 0;
}

.a:after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 1px;
  opacity: 0;
  transition: opacity 0.3s;
}

.a:focus:after {
  opacity: 1;
}


.contraction {
  padding: 0 10%;

  &.abs {
    width: 80%;
  }
}

@media screen and (max-width: 1300px) {
  .contraction {
    padding: 0 5%;

    &.abs {
      width: 90%;
    }
  }
}

@media screen and (max-width: 900px) {
  #app {
    font-size: 0.8em;
  }

  .contraction {
    padding: 0 2%;

    &.abs {
      width: 96%;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.slide-enter-from {
  transform: translate3d(-100vw, 0, 0);
}

.slide-leave-to {
  transform: translate3d(100vw, 0, 0);
}
</style>

