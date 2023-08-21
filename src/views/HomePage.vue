<template>
  <div class="home">
    <HeroSection @open-modal="showModal = true"/>
    <CreateProject v-if="showModal" @close="showModal = false"/>
  </div>
</template>

<script>
import HeroSection from '@/components/HomePage/HeroSection.vue'
import CreateProject from '@/views/CreateProject.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    CreateProject
  },
  data () {
    return {
      showModal: false
    }
  },
}
</script>

<style lang="sass" scoped>
.home

</style>