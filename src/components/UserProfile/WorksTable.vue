<template>
  <WorksAdd v-if="showModal" @close="showModal = false"/>
    <div class="card_header">
      <h2>Список работ</h2>
      <button class="btn btn--black" @click="showModal = true">
        <i class="fa-solid fa-plus"></i>
        Добавить работы
      </button>
    </div>
    <div class="wrapper">
      <table class="table">
        <thead>
          <tr>
            <th>Наименование работ</th>
            <th>Кол-во</th>
            <th>Ед. изм.</th>
            <th>Стоимость</th>
            <th>Статус</th>
            <th></th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>
              Демонтаж вентиляционной решетки/приточного клапана
              <div class="date"><i class="fa-regular fa-calendar"></i>14.08.23</div>
            </td>
            <td>4</td>
            <td>шт</td>
            <td>556 р.</td>
            <td><div class="tag tag--gray"><i class="fa-solid fa-circle"></i>Ожидание</div></td>
            <td><i class="fa-solid fa-ellipsis"></i></td>
          </tr>
          <tr>
            <td>
              Демонтаж датчиков/оповещателей/кнопки пожарной сигнализации
              <div class="date"><i class="fa-regular fa-calendar"></i>14.08.23</div>
            </td>
            <td>2</td>
            <td>шт</td>
            <td>789 р.</td>
            <td><div class="tag tag--accent"><i class="fa-solid fa-circle"></i>Назначен</div></td>
            <td><i class="fa-solid fa-ellipsis"></i></td>
          </tr>

        </tbody>
      </table>
    </div>
</template>

<script>
import WorksAdd from '@/components/UserProfile/WorksAdd.vue'

export default {
  name: 'WorksTable',
  components: {
    WorksAdd
  },
  data () {
    return {
      showModal: false
    }
  },
}
</script>

<style lang="sass" scoped>
.wrapper
  position: relative
  border: 1px solid $border
  border-radius: 1rem


.date
  color: $gray
  font-size: 1.2rem
  & i
    font-size: 1.2rem
    margin-right: 0.6rem
    margin-top: 0.7rem

</style>