<template>
  <div class="account">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 20.0001C20 20.5524 19.5523 21.0001 19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001ZM7.5 13.0001C7.5 15.4854 9.51472 17.5001 12 17.5001C14.4853 17.5001 16.5 15.4854 16.5 13.0001H14.5C14.5 14.3808 13.3807 15.5001 12 15.5001C10.6193 15.5001 9.5 14.3808 9.5 13.0001H7.5Z"></path></svg>
    </div>
    <div class="card">
      <LoginForm v-if="form === 'login'" @register="form = 'register'"/>
      <RegisterForm v-if="form === 'register'" @login="form = 'login'"/>
    </div>
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
.account
  background: $background
  padding: 18rem 0 16rem
.card
  border: none
  margin: 4rem auto 0
  width: 100%
  max-width: 41rem
  z-index: 111
  & input
    border: 1px solid $black

.icon
  text-align: center
  & svg
    width: 7rem



</style>