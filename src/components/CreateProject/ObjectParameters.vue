<template>
    <h3>{{ choosedRoom.name }}</h3>
    <div class="grid">
      <div class="plan">
        <div class="plan__floor">
          <div class="plan__window"></div>
          <div class="plan__door"></div>
          <div class="plan__area">{{ roomArea ? roomArea : 0 }}м²</div>
        </div>
      </div>
      
      <ul class="parameters__area">
        <h4>Площадь помещения:</h4>
        <li>
          Площадь стен: <b>{{ wallsArea ? wallsArea : 0 }} м²</b>
        </li>
        <li>
          Площадь пола: <b>{{ roomArea ? roomArea : 0 }} м²</b>
        </li>
        <li>
          Площадь потолка: <b>{{ roomArea ? roomArea : 0 }} м²</b>
        </li>
        <li>
          Итоговая площадь <br>с вычетом проемов: <b>{{ totalArea ? totalArea : 0 }} м²</b>
        </li>
      </ul>
    </div>

      <form class="parameters">
        <h4>Размеры помещения:</h4>
        <div class="parameters__list">
          <div class="form_group">
            <label>Длина, м:</label>
            <input v-model="room.description.lngth" type="number" step="0.1" min="0" max="50" placeholder="0">
          </div>
          <div class="form_group">
            <label>Ширина, м:</label>
            <input v-model="room.description.width" class="parameters__value" type="number" step="0.1" min="0" max="50" placeholder="0">
          </div>      
          <div class="form_group">
            <label>Высота, м:</label>
            <input v-model="room.description.height" type="number" step="0.1" min="0" max="50" placeholder="0">
          </div>
        </div>
        
      </form>
      <div class="form_group">
        <label>Количество окон/проемов:</label>
        <input v-model="openingsNumber" @input="addOpenings" class="parameters__value"  type="number" step="1" min="0" max="10" placeholder="0">

        <ul class="parameters__list">
          <div v-for="(opening, id) in openings" :key="id" class="parameters__input-group">
            <li class="parameters__item">
              <label class="parameters__label">Ширина проема {{ id + 1 }}</label>
              <input v-model="opening.width" class="parameters__value"  type="number" step="1" min="0" placeholder="0">
            </li>
            <li class="parameters__item">
              <label class="parameters__label">Высота проема {{ id + 1 }}</label>
              <input v-model="opening.height" class="parameters__value"  type="number" step="1" min="0" placeholder="0">          
            </li>
          </div>
        </ul>

      </div>

    <!-- <ObjectWorks /> -->
    <div class="works">
      <h4>Необходимые работы:</h4>
      <ul class="works_list">
        <li v-for="work in works" :key="work" class="works_item">
          {{ work }}
        </li>
      </ul>
    </div>

    <div class="card_footer">
      <button class="btn btn--white" @click="this.$emit('set-component', 'ObjectRooms')">
        Назад
      </button>
      <button class="btn btn--black" @click="updateRooms">
        Сохранить
      </button>
    </div>
<!-- 
      <ul class="parameters__list">
        <div v-for="(opening, id) in openings" :key="id" class="parameters__input-group">
          <li class="parameters__item">
            <label class="parameters__label">Ширина проема {{ id + 1 }}</label>
            <input v-model="opening.width" class="parameters__value"  type="number" step="1" min="0" placeholder="0">
          </li>
          <li class="parameters__item">
            <label class="parameters__label">Высота проема {{ id + 1 }}</label>
            <input v-model="opening.height" class="parameters__value"  type="number" step="1" min="0" placeholder="0">          
          </li>
        </div>
      </ul>
    </div>

    <div>
      <h3>Необходимые виды работ</h3>
      <ul class="works">
        <li v-for="type in types" :key="type">
          <button @click="chooseType(type.id)">{{ type.name }} 
            <b>{{countWorks.filter(work => work.work_type === type.id && work.roomId === choosedRoomNumber + 1).length}}</b>
          </button>
        </li>
      </ul>
      <ObjectWorks 
        v-if="type" 
        :roomId="choosedRoomNumber" 
        :works="works" 
        :form="form"
        @go-back="goBack"
      />
    </div>

    <div class="parameters__buttons">
      <button class="btn btn--white"  @click="this.$emit('set-component', {component: 'ObjectRooms', width: 50})">Назад</button>
      <button class="btn btn--accent" @click="updateObject">Сохранить</button>
    </div> -->
</template>

<script>
// import ObjectWorks from '@/components/CreateProject/ObjectWorks.vue'

export default {
  props: ['choosedRoom'],
  emits: ['set-component', 'update-rooms'],
  components: {
  },
  data () {
    return {
      room: {
        objectId: '',
        name: this.choosedRoom.name,
        size: 0,
        index: this.choosedRoom.index,
        description: {}
      },
      openingsNumber: null,
      openings: [],
      works: ['Демонтажные работы', 'Электромонтажные работы']
    }
  },
  computed: {
    roomArea() {
      return Math.round(this.room.description.lngth * this.room.description.width * 100) / 100
    },
    wallsArea() {
      return Math.round(((this.room.description.lngth * this.room.description.height) * 2 + 
                          (this.room.description.width * this.room.description.height) * 2) * 100) / 100
    },
    openingsArea() {
      let area = 0
      for (let i = 0; i < this.openings.length; i++) {
        area += this.openings[i].width * this.openings[i].height
      }
      return area
    },
    totalArea() {
      return this.roomArea * 2 + this.wallsArea - this.openingsArea
    },
  },
  methods: {
    addOpenings() {
      this.openings = []
      for (let i = 0; i < this.openingsNumber; i++) {
        this.openings.push({'width': null, 'height': null})
      }
    },
    updateRooms() {
      this.room.size = this.totalArea
      this.$emit('update-rooms', this.room)
      this.$emit('set-component', 'ObjectRooms')
    }
  }
}


// import ObjectWorks from '@/components/Create/ObjectWorks.vue'
// import types from '@/data/work_types.json'
// import works from '@/data/works.json'
// import { reactive } from 'vue'


// export default {
//   name: 'ObjectParameters',
//   props: ['choosedRoom', 'choosedRoomNumber'],
//   emits: ['add-data'],
//   components: {
//     ObjectWorks
//   },
//   setup(){
//     const form = reactive([])
//     return{
//       form
//     }
//   },
//   data () {
//     return {
//       types: types,
//       type: null,
//       openingsNumber: null,
//       openings: [],
//       countWorks: this.$store.getters.getWorks,
//       parameters: []
//     }
//   },
//   computed: {
//     roomArea() {
//       return Math.round(this.lngth * this.width * 100) / 100
//     },
//     wallsArea() {
//       return Math.round(((this.lngth * this.height) * 2 + 
//                          (this.width * this.height) * 2) * 100) / 100
//     },
//     openingsArea() {
//       let area = 0
//       for (let i = 0; i < this.openings.length; i++) {
//         area += this.openings[i].width * this.openings[i].height
//       }
//       return area
//     },
//     totalArea() {
//       return this.roomArea * 2 + this.wallsArea - this.openingsArea
//     },
//     works() {
//       return works.filter(work => work.work_type === this.type)
//     }

//   },
//   methods: {
//     updateObject() {
//       this.$store.commit('updateObjectRoom', { room: this.choosedRoomNumber, size: this.totalArea })
//       this.$emit('set-component', {component: 'ObjectRooms', width: 50})
//     },
//     addOpenings() {
//       this.openings = []
//       for (let i = 0; i < this.openingsNumber; i++) {
//         this.openings.push({'width': null, 'height': null})
//       }
//     },
//     goBack() {
//       this.type = null
//     },
//     chooseType(id) {
//       this.type = id
//       this.works.forEach(work => {
//         work.quantity = null
//         work.sum = 0
//         work.specialist = 'Ожидание специалиста'
//         work.startDate = new Date().toLocaleDateString()
//         work.finishDate = new Date().toLocaleDateString()
//         work.workTypeId = this.type.id
//         work.roomId = this.choosedRoomNumber + 1
//       })
//       this.form = this.works
//     },
    
//   }
// }
</script>

<style lang="sass" scoped>
.card
  &_footer
    display: flex
    justify-content: space-between

.grid
  display: grid
  grid-template-columns: 1fr 43%
  gap: 2rem
  margin-bottom: 3rem
.parameters
  &__buttons
    display: flex
    align-items: center
    justify-content: flex-end
    gap: 1.6rem
  &__list
    display: flex
    gap: 2rem
  & li p
    font-size: 1.5rem
    letter-spacing: normal
    margin-bottom: 1.2rem
  &__body
    display: flex
    gap: 2rem
  &__area
    border: 1px solid $border
    border-radius: $border-radius
    display: flex
    flex-direction: column
    padding: 3rem
    & li
      display: flex
      justify-content: space-between
      align-items: flex-end
      margin-bottom: 2rem
      &:last-of-type
        margin-top: auto
      &:last-of-type > b
        color: $accent
        font-size: 2.6rem
        margin-top: auto
      

  &__input-group
    display: flex
    justify-content: space-between
    align-items: center
    gap: 1.6rem
    & li
      flex-direction: column
      align-items: flex-start
  &__list

    &:first-of-type
      & > li:last-of-type
          margin: 0
          & input
            margin: 0

      
  &__item
    display: flex
    flex-direction: column
    margin-bottom: 1.5rem
    width: 100%

  &__summary
    display: flex
    justify-content: flex-end
    padding: 4rem 0 0 0


.plan
  border: 1px solid $border
  border-radius: 1rem
  display: flex
  align-items: center
  justify-content: center
  padding: 3rem
  &__floor
    border: 4px solid $black
    transition: 0.1s ease-in-out
    display: flex
    align-items: center
    justify-content: center
    position: relative
    height: 18rem
    width: 25rem
  &__window
    background-color: $white
    border: 1px solid $black
    position: absolute
    top: -0.4rem
    left: 13rem
    height: 0.4rem
    width: 6rem
  &__door
    background-color: $white
    position: absolute
    top: 10rem
    left: -3rem
    transform: rotate(90deg)
    height: 1rem
    width: 5rem
    &::after
      content: ''
      background-color: $black
      position: absolute
      top: -0.8rem
      left: 0.2rem
      transform: rotate(20deg)
      height: 0.2rem
      width: 5rem
  &__area
    font-style: italic
    font-size: 1.8rem
    color: $gray
.works
  margin: 2rem 0 4rem
  &_list
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 1.2rem
    margin-bottom: 1rem
    & li
      background-color: $background
      border: 1px solid $background
      border-radius: 1rem
      font-weight: 500
      font-size: 1.5rem
      text-align: left
      text-transform: uppercase
      transition: 0.3s ease-in-out
      padding: 0 3rem
      position: relative
      letter-spacing: 0.2px
      display: flex
      align-items: center
      justify-content: space-between
      height: 11rem
      width: 100%
      &:hover
        cursor: pointer
    
</style>