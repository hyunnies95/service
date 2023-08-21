<template>
  <div class="top"></div>
  <section class="container">
    <aside class="steps">

    </aside>
    <div class="wrapper">
      <h1>Шаг {{ step }} из 4</h1>
      <div class="content">
        <div v-if="step === 1">
          <h4>Как вы работаете?</h4>
          <input type="radio" name="account-type" id="user" value="false" checked="checked" v-model="specialist.isCompany">
          <label for="user">На себя, частный специалист</label>
          <input type="radio" name="account-type" id="specialist" value="true" v-model="specialist.isCompany">
          <label for="specialist">ИП или представитель компании</label>
        </div>

        <div v-if="step === 2">
          <h4>Как вас зовут?</h4>
          <input type="text" name="" v-model="specialist.surname" placeholder="Фамилия">
          <input type="text" name="" v-model="specialist.name" placeholder="Имя">
          <input type="text" name="" v-model="specialist.patronymic" placeholder="Отчество">
        </div>

        <div v-if="step === 3">
          <h4>Чем вы занимаетесь?</h4>
          <div class="selected">
            <ul class="jobs">
              <li v-for="job in specialist.jobs" :key="job" class="job" @click="deleteJob(job)">{{ job }}<button>x</button></li>
            </ul>
          </div>
          <ul class="jobs">
            <li v-for="job in jobs" :key="job" class="job" @click="selectJob(job)">{{ job }}</li>
          </ul>
        </div>

        <div v-if="step === 4">
          <h4>Ваш адрес</h4>
          <MapComponent @update-address="updateAddress"/>
        </div>

      </div>
      <div class="permission">
        <input type="checkbox" id="permission" v-model="permission" checked="checked">
        <label for="permission">Даю согласие на обработку персональных данных, <br> согласно политике конфиденциальности</label>
      </div>
      <div class="buttons">
        <button v-if="step !== 1" class="btn btn--white" @click="step > 1 ? step -= 1 : step = 1">Назад</button>
        <button v-if="step !== 4" class="btn btn--accent" @click="step < 4 ? step += 1 : step = 4">Далее</button>
        <button v-if="step === 4" class="btn btn--accent" @click="register">Завершить регистрацию</button>
      </div>
    </div>
  </section>
</template>

<script>
import MapComponent from '@/components/Layout/MapComponent.vue'

export default {
  name: 'RegisterVIew',
  components: {
    MapComponent
  },
  data () {
    return {
      step: 1,
      permission: true,
      specialist: {
        isCompany: false,
        name: '',
        surname: '',
        patronymic: '',
        jobs: [],
        address: ''
      },
      jobs: ['Демонтажные работы','Электромонтажные работы','Отделочные работы','Строительные работы','Декоративные работы'] 
    }
  },
  methods: {
    deleteJob(job) {
      this.specialist.jobs.splice(this.specialist.jobs.indexOf(job), 1)
    },
    selectJob(job) {
      if (!this.specialist.jobs.includes(job)) this.specialist.jobs.push(job)
    },
    updateAddress(address) {
      this.specialist.address = address
    },
    register() {
      this.$store.commit('updateSpecialist', this.specialist)
      this.$router.push('specialist')
    }
  }
}
</script>

<style lang="sass" scoped>
h1
  margin-bottom: 2.6rem
h4
  margin-bottom: 7rem
.container
  display: grid
  grid-template-columns: 28% 1fr
  gap: 10rem
  margin-top: 20rem

.steps
  background-color: $col-background
  border-radius: 1rem
  padding: 2rem
  height: 100%
  width: 100%

.wrapper
  padding: 5rem 0

.content
  margin-bottom: 7rem
  min-height: 30rem
  min-width: 100%
  flex: 100%
  & div
    width: 100%
  & input[type="radio"]
    display: none
    &:checked + label
      background-color: $col-accent-opacity
      border-color: $col-accent
      color: $col-accent
      &::before
        border-color: $col-accent
  & label
    border-radius: 0.7rem
    font-size: 1.6rem
    font-weight: normal
    cursor: pointer
    padding: 2rem 2rem 2rem 4.5rem
    position: relative
    height: 5.4rem
    width: 50%
    &::before
      border: 5px solid $col-border
      border-radius: 50%
      content: ''
      position: absolute
      left: 1.6rem
      top: 1.9rem
      height: 1.6rem
      width: 1.6rem

  & input[type="text"]
    margin-bottom: 1.6rem
.buttons
  display: flex
  align-items: center
  justify-content: space-between

.permission
  display: flex
  align-items: center
  text-align: left
  gap: 1.6rem
  margin-bottom: 5rem
  & label
    color: $col-paragraph
    opacity: .8
    font-weight: 500
    line-height: 2.3rem
    letter-spacing: 0.2px
    cursor: pointer
    margin: 0
.jobs
  display: flex
  align-items: center
  flex-wrap: wrap
  gap: 1rem
  & .job
    background-color: $col-accent-opacity
    border-radius: 5rem
    cursor: pointer
    padding: 1.2rem 2rem

.selected
  border: 1px solid $col-border
  border-radius: 0.7rem
  padding: 2rem
  min-height: 15rem
  margin-bottom: 2.2rem
  & .job
    display: flex
    align-items: center
    background-color: $col-background
    padding: 1.2rem 1.3rem 1.2rem 2rem
    & button
      background-color: #ddd
      border-radius: 50%
      font-size: 1.3rem
      color: $col-white
      margin-left: 1.2rem
      padding-bottom: 0.2rem
      width: 2.2rem
      height: 2.2rem
.btn
  min-width: 15rem
  &:last-of-type
    margin-left: auto

.top
  background-color: $col-dark-grey
  height: 7rem
  width: 100%

</style>