<template>
  {{ currentUser }}
    <WorksTable />
{{ object }}
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
      object: null
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
        this.object = response.data[0]
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
    );
  }
}
</script>

<style lang="sass" scoped>



</style>