<template>
  <router-view name="sidebar"></router-view>
  <router-view name="header"></router-view>
  <router-view></router-view>
  <router-view name="profile"></router-view>
  <router-view name="footer"></router-view>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.wrapper
  display: flex
  margin-top: 8.3rem
  @media (min-width: $medium)
    margin-left: 36rem
.container
  padding: 4rem 3.6rem

</style>
