<template>
  <header class="header">
    <div class="header_logo">
      <button class="toggle" @click="this.$emit('toggle-menu')">
        <i class="fa-solid fa-bars"></i>
      </button>
      <a href="/" class="logo">Сервис Строительства</a>
    </div>
    <div class="header_wrapper">
      <div class="header_user" @click="showDropdown = !showDropdown">
        username
        <img class="avatar" :src="require(`@/assets/images/avatar.jpg`)" alt="avatar">
        <span></span>
      </div>
      <DropdownMenu v-if="showDropdown" :class="{active: showDropdown}" @close="showDropdown = false"/>
    </div>
  </header>
</template>

<script>
import DropdownMenu from '@/components/Layout/DropdownMenu.vue'
export default {
  name: 'AppHeader',
  components: {
    DropdownMenu
  },
  data () {
    return {
      showDropdown: false
    }
  }
}
</script>

<style lang="sass" scoped>
.header
  background-color: $white
  border-bottom: 1px solid $border
  display: flex
  align-items: center
  justify-content: space-between
  position: fixed
  top: 0
  width: 100%
  padding: 0 2rem 0 0
  height: 8.3rem
  z-index: 1
  &::before
    // background-size: auto auto
    // background-color: rgba(234, 201, 93, 1)
    // background-image: repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(255, 218, 96, 1) 20px, // rgba(255, 218, 96, 1) 40px )
    // content: ''
    // position: absolute
    // bottom: -4.1rem
    // left: 0
    // height: 4rem
    // width: 100%
  @media (min-width: $medium)
    padding: 0 3.6rem 0 0
  &_logo
    padding-left: 3.6rem
    height: 100%
    width: 100%
    max-width: 36rem
    @media (min-width: $medium)
      border-right: 1px solid $border
      background: $background
  &_wrapper
    position: relative
  &_user
    cursor: pointer
    display: flex
    align-items: center
    font-weight: 600
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
  & .toggle
    display: block
    @media (min-width: $medium)
      display: none
  & .avatar
    border-radius: 50%
    margin-left: 1rem
    height: 3.6rem
    width: 3.6rem
</style>
