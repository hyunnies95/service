<template>
  <header class="header">
    <div class="header_wrapper container">
      <div class="header_logo">
        <a href="/" class="logo">Сервис Строительства</a>
      </div>
      <nav class="header_links">
        <a href="/profile">Профиль</a>
        <a href="/login" class="login">Войти</a>
      </nav>

    </div>
  </header>
</template>

<script>
// import DropdownMenu from '@/components/Layout/DropdownMenu.vue'
export default {
  name: 'HomeHeader',
  components: {
  }
}
</script>

<style lang="sass" scoped>
.header
  background-color: $white
  height: 9rem
  width: 100%
  z-index: 1
  @media (min-width: $medium)
  &_logo
    width: 36rem
  &_wrapper
    display: flex
    align-items: center
    justify-content: space-between
    height: 100%
  &_logo
    display: flex
    align-items: center
    gap: 1.6rem
  & .logo
    font-size: 2.2rem
    font-weight: 900
    line-height: 2.2rem
    @media (min-width: $medium)
      font-size: 2.6rem
  &_links
    display: flex
    align-items: center
    gap: 3rem
    font-weight: 600
    &:not(:last-of-type):hover
      border: 1px solid $black
      border-radius: 5rem
    & .login
      background: $black
      border: 1px solid $black
      border-radius: 5rem
      color: $white
      cursor: pointer
      display: flex
      align-items: center
      justify-content: center
      gap: 1.2rem
      font-size: 1.7rem
      font-weight: 600
      padding: 0 3rem
      transition: all 0.3s ease
      min-height: 3.6rem
      &:hover
        background: $white
        color: $black
</style>
