<template>
  <router-view name="sidebar"></router-view>
  <router-view name="header"></router-view>
  <router-view></router-view>
  <div class="wrapper">
    <div class="container">
      <router-view name="profile"></router-view>
    </div>
  </div>

  <!-- <HomeHeader @toggle-menu="showMenu = !showMenu"/>
  <HomePage v-if="$route.path === '/'" />
  <ProfilePage v-if="$route.path != '/'" /> -->
</template>

<script>
// import HomeHeader from '@/components/Layout/HomeHeader.vue'
// import ProfilePage from '@/views/ProfilePage.vue'
// import HomePage from '@/views/HomePage.vue'

export default {
  components: {
    // HomeHeader,
    // ProfilePage,
    // HomePage
  },
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
