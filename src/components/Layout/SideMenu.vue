<template>
  <aside class="menu" :class="{active: showMenu && windowWidth <= 1100 }">
    <div class="menu_top">
      <ul>
        <li class="menu_item">
        <router-link to="/profile" class="menu_link menu_link--active">Главная</router-link>

        </li>
        <li class="menu_item">
          <a href="#" class="menu_link">
            Проекты
          </a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link">
            Специалисты
          </a>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link">
            Документы
          </a>
        </li>
      </ul>
    </div>
    <div class="menu_bottom">
      <ul>
        <li class="menu_item">
        <router-link to="/account" class="menu_link">Аккаунт</router-link>
        </li>
        <li class="menu_item">
          <a href="#" class="menu_link">
            Поддержка
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SideMenu',
  props: ['showMenu'],
  created() {
    window.addEventListener("resize", this.handleResize)
  },
  data () {
    return {
      windowWidth: window.innerWidth
    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth
    },
  },
}
</script>

<style lang="sass" scoped>
.menu
  background: $black
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  padding: 0 7rem 0 3rem
  position: fixed
  transition: all 0.4s ease
  top: 8.3rem
  left: -33rem
  width: 33rem
  height: calc(100vh - 8.3rem)
  z-index: 2
  &::before
    background: $black
    content: ''
    position: absolute
    transition: all 0.4s ease
    opacity: 0
    top: 0
    left: 0
    bottom: 0
    width: 0
  @media (min-width: $medium)
    display: flex
    background: $background
    border-right: 1px solid $border
    position: fixed
    left: 0
    min-width: 36rem
  &.active
    left: 0
    &::before
      opacity: .25
      width: 100vw
      z-index: -1
      @media (min-width: $medium)
        display: none
    
  
  &_top
    flex: 1 0
    display: flex
    align-items: center
    height: 100%
  &_bottom
    flex: 0 0 auto
    display: flex
    align-items: center
    margin-top: auto
    min-height: 21rem
  &_item
    padding: 0.5rem 0
  &_link
    color: $gray
    font-weight: 600
    transition: all 0.3s ease
    &--active
      color: $white
      @media (min-width: $medium)
        color: $black

    &:hover
      color: $accent
    @media (min-width: $medium)
      font-size: 2rem
      &:hover
        color: $black

</style>