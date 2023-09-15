<template>
  <div class="register">
    <h3 class="register__title">Создать аккаунт</h3>
    <Form class="register__form" @submit="handleRegister" :validation-schema="schema">
      <div class="register__form-group">
        <Field type="text" name="username" placeholder="Имя пользователя" />
        <ErrorMessage name="username" class="error-feedback" />
      </div>
      <div class="register__form-group">
        <Field type="password" name="password" placeholder="Пароль" />
        <ErrorMessage name="password" class="error-feedback" />
      </div>
      <div class="register__form-group">
        <div v-if="message" class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
      <div class="register__form-group register__account-type">
        <!-- <label>Тип аккаунта</label> -->
        <div>
          <input type="radio" name="account-type" id="user" value="user" checked="checked" v-model="accountType">
          <label for="user">Пользователь</label>
        </div>
        <div>
          <input type="radio" name="account-type" id="specialist" value="specialist" v-model="accountType">
          <label for="specialist">Специалист</label>
        </div>
      </div>
      <button class="btn btn--accent">Регистрация</button>
    </Form>
    <p class="register__back" @click="this.$emit('login')">Вернуться ></p>

  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate"
import * as yup from "yup"

export default {
  name: 'RegisterForm',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data () {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required('Введите имя пользователя')
        .min(3, 'Минимум 3 символа')
        .max(30, 'Максимум 30 символов'),
      password: yup
        .string()
        .required('Введите пароль')
        .min(3, 'Минимум 3 символа')
        .max(40, 'Максимум 40 символов'),
    })

    return {
      accountType: 'user',
      successful: false,
      message: '',
      schema,
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile')
      this.$parent.$emit('close-modal')
    }
  },
  methods: {
    handleRegister(user) {
      user.role = 'ROLE_USER'

      this.message = ''
      this.successful = false

      this.$store.dispatch('auth/register', user).then(
        (data) => {
          this.message = data.message
          this.successful = true
          this.$router.push('/')
          this.$parent.$emit('close-modal')
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          this.successful = false
        }
      )
      if (this.accountType === 'specialist') {
        this.$router.push('register')
        this.$parent.$emit('close-modal')
      }
      
    },
  }
}
</script>

<style lang="sass" scoped>
.register
  &__title
    text-align: center
    margin-bottom: 3rem
  &__social
    text-align: center
    & span
      font-size: 1.4rem
      opacity: .4
    & img
      cursor: pointer
      margin: 2rem 1.5rem 0
      width: 4.5rem
  &__back
    text-align: center
    cursor: pointer
    margin-top: 3rem
  &__account-type
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 1.3rem
    margin-top: 3rem


.btn
  margin-bottom: 3.5rem
  height: 5.4rem
  width: 100%

input
  margin-bottom: 2.2rem
  position: relative
  border: 1px solid $black
  &:focus
    border-color: $black
  
input[type="radio"]
  display: none
  &:checked + label
    background-color: $col-accent-opacity
    border-color: $accent
    color: $accent
    &::before
      border-color: $accent
  
label
  border-radius: 0.7rem
  cursor: pointer
  padding: 2rem 2rem 2rem 4.5rem
  position: relative
  height: 5.4rem
  &::before
    border: 5px solid $col-border
    border-radius: 50%
    content: ''
    position: absolute
    left: 1.6rem
    top: 1.9rem
    height: 1.6rem
    width: 1.6rem

</style>
