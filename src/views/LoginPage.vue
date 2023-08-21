<template>
  <!-- <div class="overlay" @click="this.$emit('close-modal')"></div> -->
  <div class="card">
    <LoginForm v-if="form === 'login'" @register="form = 'register'"/>
    <RegisterForm v-if="form === 'register'" @login="form = 'login'"/>
  </div>

</template>

<script>
import LoginForm from '@/components/Auth/LoginForm.vue'
import RegisterForm from '@/components/Auth/RegisterForm.vue'

export default {
  components: {
    LoginForm,
    RegisterForm
  },
  emits: ['close-modal'],
  data () {
    return {
      form: 'login'
    }
  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>
.overlay
  background-color: $col-black
  opacity: .8
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: 111
.card
  position: absolute
  top: 40%
  left: 50%
  transform: translate(-50%, -50%)
  width: 100%
  max-width: 50rem
  z-index: 111

</style>