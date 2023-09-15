<template>
  <div class="wrapper">
    <div class="container">
      {{ user }}
      <WorksTable />
      {{ object }}
    </div>
  </div>
  <!-- <StepsSection /> -->
</template>

<script>
// import StepsSection from '@/components/UserProfile/StepsSection.vue'
import WorksTable from '@/components/UserProfile/WorksTable.vue'

import UserService from '../services/user.service'
import EventBus from '../common/EventBus'

export default {
  name: 'UserProfile',
  components: {
    // StepsSection,
    WorksTable
  },
  data () {
    return {
      user: null,
      object: ''
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    }
  },
  mounted() {
    UserService.getUserObject().then(
      response => { 
        this.object = response.data
       },
      (error) => {
        this.object =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();

        if (error.response && error.response.status === 403) {
          EventBus.dispatch('logout')
        }
      }
    )
    UserService.getUser().then(
      response => { 
        this.user = response.data
       }
    )
  }
}
</script>

<style lang="sass" scoped>
.wrapper
  background: $background
  display: flex
  margin-top: 14rem
  min-height: calc(100vh - 14rem)
  @media (min-width: $medium)
    margin-left: 36rem
.container
  padding: 4rem 3.6rem
  max-width: 160rem

</style>