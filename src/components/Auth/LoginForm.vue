<template>
  <div class="login">
    <h3 class="login__title">Войти в профиль</h3>
    <Form class="login__form" @submit="handleLogin" :validation-schema="schema">
      <div class="login__form-group">
        <Field type="text" name="username" placeholder="Имя пользователя / Email" />
        <ErrorMessage name="username" class="error-feedback" />
      </div>
      <div class="login__form-group">
        <Field type="password" name="password" placeholder="Пароль" />
        <ErrorMessage name="password" class="error-feedback" />
      </div>
      <div class="login__form-group">
        <div v-if="message" class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
      <button class="btn btn--accent">Войти</button>
    </Form>
    <div class="login__bar">
      <a href="#">Забыли пароль?</a>
      <a href="#" @click="this.$emit('register')">Регистрация</a>
    </div>
    

  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate"
import * as yup from "yup"

export default {
  name: 'LoginForm',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data () {
    const schema = yup.object().shape({
      username: yup.string().required('* Введите имя пользователя или email'),
      password: yup.string().required('* Введите пароль'),
    })

    return {
      schema,
      message: ''
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile')
      this.$parent.$emit('close-modal')
    }
  },
  methods: {
    handleLogin(user) {
      this.$store.dispatch('auth/login', user).then(
        () => {
          this.$router.push('/profile')
          this.$parent.$emit('close-modal')
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        }
      )
    },
  }
}
</script>

<style lang="sass" scoped>
.login
  &__title
    text-align: center
    margin-bottom: 3rem
  &__bar
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 3rem
    & a
      color: $col-paragraph
      font-weight: normal
  &__social
    text-align: center
    & span
      font-size: 1.4rem
      opacity: .4
    & img
      cursor: pointer
      margin: 2rem 1.5rem 0
      width: 4.5rem
  &__form-group
    margin-bottom: 2.2rem
    position: relative
  & input
    border: 1px solid $black
.btn
  margin: 2.6rem 0 1.5rem
  height: 5.4rem
  width: 100%
</style>
