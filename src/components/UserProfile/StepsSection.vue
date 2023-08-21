<template>
  <div class="card card--step" @click="this.$router.push('account')">
    <i class="fa-solid fa-xmark"></i>
    <p>
      Шаг 1 - Заполните информацию об аккаунте
    </p>
    <i class="fa-solid fa-arrow-right"></i>
  </div>
  <div class="card card--step">
    <i class="fa-solid fa-xmark"></i>
    <p>
      Шаг 2 - Согласуйте работу со специалистом
    </p>
    <i class="fa-solid fa-arrow-right"></i>
  </div>
  <div class="card card--step">
    <i class="fa-solid fa-xmark"></i>
    <p>
      Шаг 3 - Посмотрите, как работать с проектом
    </p>
    <i class="fa-solid fa-arrow-right"></i>
  </div>
</template>

<style lang="sass" scoped>
.card
  margin-bottom: 1.8rem
  & p
    font-size: 1.8rem
    font-weight: 600
  & .fa-xmark
    color: $gray
    font-size: 2.2rem
    opacity: .8
    margin-right: 4.6rem
  & .fa-arrow-right
    font-size: 2.2rem
    color: $accent
    margin-left: auto
</style>