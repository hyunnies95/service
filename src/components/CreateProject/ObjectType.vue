<template>
  <div class="card_content">
  <div class="card_header">
    <h2>Где нужен ремонт?</h2>
    <button class="close" @click="this.$parent.$emit('close')">
      <i class="fa-solid fa-xmark"></i>
    </button>
  </div>

  <ul class="types__list">
    <li class="types__item" v-for="type in types" v-bind:key="type">
      <input class="types__radio" type="radio" name="type" :id="type" :value="type" @change="updateObject(type)">
      <label class="types__card" :for="type">
        <img class="types__image" :src="require(`@/assets/images/${type}.jpg`)" :alt="type">
      </label>
      <h4 class="types__title">{{ type }}</h4>
    </li>
  </ul>
  <!-- @click="this.$emit('set-component', { component: 'ObjectRooms', width: 50})" -->
  <button class="btn btn--black" @click="this.$emit('set-component', 'ObjectRooms')">
    Далее
  </button>
</div>
</template>

<script>
export default {
  name: 'ObjectType',
  emits: ['set-component', 'update-object'],
  data () {
    return {
      // object: this.$store.getters.getObject,
      types: ['Квартира', 'Дом', 'Офис', 'Санузел'],
      choosedType: 'Квартира',
    }
  },
  methods: {
    updateObject(type) {
      this.$emit('update-object', { type: type })
      this.$emit('set-component', 'ObjectRooms')
    }
  }
}
</script>


<style lang="sass" scoped>
.types
  &__list
    display: grid
    grid-template-columns: repeat(2, 1fr)
    align-items: center
    justify-content: center
    gap: 3rem
    margin-bottom: 5rem
  &__card
    border-radius: 0.5rem
    cursor: pointer
    transition: .3s ease-in-out
    position: relative
    overflow: hidden
    margin: 0
    height: 26rem
    &:hover
      & + .types__title
        border-color: $black
  &__image
    filter: grayscale(100%)
    object-fit: cover
    position: relative
    transition: .3s ease-in-out
    height: 100%
    width: 100%
  &__radio
    display: none
    &:checked,
    &:hover
      & + .types__card h4
        background-color: #fff4d4
      
  &__title
    display: inline-flex
    border-bottom: 1px solid transparent
    color: $black
    font-size: 1.4rem
    font-weight: 600
    text-transform: uppercase
    padding: 1rem 0 0.5rem
    transition: .3s ease-in-out
    z-index: 2

.btn
  margin-left: auto

</style>
