<template>
  <!-- <ProfileHeader @toggle-menu="showMenu = !showMenu"/> -->
  <div class="wrapper">
    <!-- <SideMenu :showMenu="showMenu" /> -->
    <div class="container">
    
      <router-view name="profile"></router-view>
    </div>
  </div>
</template>

<script>
// import ProfileHeader from '@/components/Layout/ProfileHeader.vue'
// import SideMenu from '@/components/Layout/SideMenu.vue'

export default {
  components: {
    // ProfileHeader,
    // SideMenu
  },
  data () {
    return {
      showMenu: false,
      date: null,
    }
  },
}
</script>

<style lang="sass" scoped>
.wrapper
  display: flex
  margin-top: 8.3rem
  @media (min-width: $medium)
    margin-left: 39rem
  &::before
    background-size: auto auto
    background-color: rgba(234, 201, 93, 1)
    background-image: repeating-linear-gradient(135deg, transparent, transparent 20px, rgba(255, 218, 96, 1) 20px, rgba(255, 218, 96, 1) 40px )
    content: ''
    position: absolute
    height: 4rem
    width: 100%

</style>
