<template>
  <div class="dropdown">
    <button class="close" @click="this.$emit('close')">
      <i class="fa-solid fa-xmark"></i>
    </button>
    <ul>
      <li>
        <a class="dropdown_link" href="/account">
          <i class="fa-solid fa-gear"></i>
          Настройки профиля
        </a>
      </li>
      <li>
        <a class="dropdown_link" href="#">
          <i class="fa-solid fa-user"></i>
          Перейти к специалисту
        </a>
      </li>
      <li>
        <a class="dropdown_link" href="#" @click.prevent="logout">
          <i class="fa-solid fa-power-off"></i>
          Выйти
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DropdownMenu',
  methods: {
    close() {
      this.$emit('close')
    },
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass" scoped>
.dropdown
  border: 1px solid $border
  border-radius: $border-radius
  box-shadow: 6px 8px 10px rgba(0, 0, 0, 0.1)
  background-color: $white
  display: flex
  flex-direction: column
  position: absolute
  opacity: 0
  transition: .25s ease-in-out
  top: 5.6rem
  right: -2rem
  padding: 3.6rem 0 2.8rem
  min-width: 25rem
  z-index: 1
  &::before
    border-top: 1px solid $border
    border-right: 1px solid $border
    background-color: $white
    content: ''
    position: absolute
    top: -1.1rem
    right: 2.7rem
    transform: rotate(-45deg)
    width: 2rem
    height: 2rem
  &.active
    opacity: 1
  & li:not(:last-of-type)
    border-bottom: 1px solid #F7F7F7
  &_link
    color: $col-black
    display: flex
    align-items: center
    justify-content: flex-start
    gap: 1rem
    font-size: 1.4rem
    font-weight: 500
    padding: 1.2rem 3rem
    margin: 0
    & i
      width: 1.6rem
  & .close
    color: $gray
    position: absolute
    right: 1.6rem
    top: 1.6rem
</style>