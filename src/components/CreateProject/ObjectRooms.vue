<template>
<div class="card_content">
  <div class="card_header">
    <h3>Парметры помещений</h3>
    <button class="close" @click="this.$parent.$emit('close')">
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>
  <ul class="rooms">
    <li v-for="room in rooms" :key="room" class="room" @click="this.$emit('choose-room', room)">
      <h4>{{ room.name }}</h4>
      <p>Нет выбранных работ</p>
      <div class="room_area">
        <i class="fa-solid fa-vector-square"></i>
        <p>{{ room.size }} м²</p>
      </div>
      <div class="room_buttons">
        <i class="fa-solid fa-pen-to-square"></i>
        <i @click="deleteRoom(room.index)" v-if="room.index !== 0" class="fa-solid fa-trash"></i>
      </div>
    </li>
    <li class="room" @click="addRoom">
      <h4><i class="fa-solid fa-plus"></i> Добавить комнату</h4>
    </li>
  </ul>


  <div class="card_footer">
    <button class="btn btn--white"  @click="this.$emit('set-component', 'ObjectType')">
      Назад
    </button>
    <button class="btn btn--black" @click="this.$emit('set-component', 'ObjectRooms')">
      Далее
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'ObjectRooms',
  emits: ['set-component'],
  props: ['rooms'],
  data () {
    return {
      // rooms: ['Помещение 1']
    }
  },
  methods: {
    addRoom() {
      this.$emit('add-room')
    },
    deleteRoom(index) {
      this.$emit('delete-room', index)
    }
  }
}
</script>

<style lang="sass" scoped>
.card
  &_footer
    display: flex
    justify-content: space-between

.rooms

  display: grid
  margin-bottom: 3rem
  gap: 2rem
.room
  background: $white
  border: 1px solid $border
  border-radius: $border-radius
  cursor: pointer
  display: flex
  flex-direction: column
  transition: all 0.3s ease
  position: relative
  padding: 3rem
  min-height: 15rem
  width: 100%
  &:hover
    border-color: $black
  &:last-of-type
    background: $background
    border: 1px dashed $gray
    color: $gray
    display: flex
    align-items: center
    justify-content: center
    & h4
      font-weight: 400
      font-size: 1.6rem
      margin: 0
  & p
    margin-bottom: 1rem
  &_area
    display: flex
    align-items: center
    margin-top: auto
    & i
      color: $accent
      margin-right: 1rem
    & p
      font-size: 1.5rem
      color: $gray
      margin: 0
  &_buttons
    opacity: .4
    display: flex
    align-items: center
    gap: 1.4rem
    position: absolute
    right: 2rem
    top: 2rem
    z-index: 5
    


</style>