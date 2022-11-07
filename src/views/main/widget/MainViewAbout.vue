<template>
  <div class="screen">
    <img class="window" src="@/assets/window.svg" alt="design course logo" />
    <h2 class="title">Кто такой UI/UX дизайнер?</h2>
    <p class="text">
      Специалист, проектирующий понятный, доступный для пользователя интерфейс.<br>
      Он исследует целевую аудиторию, анализирует поведение пользователя, решает, как улучшить продукт.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.screen {
  position: relative;
  color: white;
  margin-top: 5em;
}

.window {
  height: 100%;
  width: 100%;
}

.title {
  position: absolute;
  top: 10%;
  left: 10%;
  font-size: 3em;
  color: black;
  font-weight: 600;
  margin: 0.3em 0 0.2em;

  @media screen and (max-width: 1200px) {
    font-size: 2.8em;
  }

  @media screen and (max-width: 990px) {
    font-size: 2.5em;
  }

  @media screen and (max-width: 900px) {
    font-size: 2.8em;
  }

  @media screen and (max-width: 750px) {
    font-size: 2.5em;
  }

  @media screen and (max-width: 690px) {
    font-size: 2.3em;
  }

  @media screen and (max-width: 600px) {
    font-size: 2em;
  }

  @media screen and (max-width: 450px) {
    font-size: 1.6em;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.3em;
  }
}

.text {
  text-align: justify;
  position: absolute;
  top: 25%;
  left: 10%;
  padding-right: 5%;
  font-size: 3em;
  color: black;
  font-weight: 400;
  margin: 0.3em 0.2em 0.2em;

  @media screen and (max-width: 1350px) {
    font-size: 2.8em;
  }

  @media screen and (max-width: 1200px) {
    font-size: 2.5em;
  }

  @media screen and (max-width: 990px) {
    font-size: 2em;
  }

  @media screen and (max-width: 900px) {
    font-size: 2.5em;
  }

  @media screen and (max-width: 750px) {
    font-size: 2.3em;
  }


  @media screen and (max-width: 690px) {
    font-size: 2em;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.5em;
  }

  @media screen and (max-width: 450px) {
    font-size: 1.3em;
  }

  @media screen and (max-width: 400px) {
    font-size: 1.2em;
  }
}
</style>
