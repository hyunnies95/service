<template>
  <header class="header">
    <div class="header_wrapper container">
      <div class="header_logo">
        <router-link to="/" class="logo">
          <i class="ri-home-smile-fill"></i>Сервис Строительства
        </router-link>
      </div>
      <nav class="header_links">
        <router-link to="/profile">Профиль</router-link>
        <router-link to="/login" class="login btn">Войти</router-link>
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
  border-bottom: 1px solid $border
  position: fixed
  height: 10rem
  width: 100%
  z-index: 2
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
    & .logo, i
      font-family: 'Inter', sans-serif
      font-size: 2rem
      font-weight: 600
      line-height: 2.2rem
      @media (min-width: $medium)
        font-size: 2.4rem
    & i
      margin-right: 0.8rem
  &_links
    display: flex
    align-items: center
    gap: 3rem
    font-weight: 600
    &:not(:last-of-type):hover
      border: 1px solid $black
      border-radius: 5rem
    & *
      font-size: 1.5rem
    & .login
      padding: 0 3rem
      transition: all 0.3s ease
      min-height: 4.2rem

</style>
