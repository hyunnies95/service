<template>
  <div class="works">
    <h4>Необходимые работы:</h4>
    <ul class="works_list">
      <li v-for="work in works" :key="work" class="works_item">
        {{ work }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      works: ['Демонтажные работы', 'Электромонтажные работы']
    }
  },
}
</script>

<style lang="sass" scoped>
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