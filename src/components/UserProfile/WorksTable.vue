<template>
  <WorksAdd v-if="showModal" @close="showModal = false"/>
  <div class="card">
    <div class="card_header">
      <h3>Список работ</h3>
      <!-- <button class="btn btn--black" @click="showModal = true">
        <i class="fa-solid fa-plus"></i>
        Добавить работы
      </button> -->
    </div>
      <table class="table">
        <thead>
          <tr>
            <th>Наименование работ</th>
            <th>Кол-во</th>
            <th>Стоимость</th>
            <th>Статус</th>
            <th>Срок</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td>
              Демонтаж вентиляционной решетки/приточного клапана
            </td>
            <td>4</td>
            <td>556 р.</td>
            <td><div class="tag tag--gray"><i class="fa-solid fa-circle"></i>Ожидание</div></td>
            <td><div class="date"><i class="fa-regular fa-calendar"></i>14.09.23</div></td>
          </tr>
          <tr>
            <td>
              Демонтаж датчиков/оповещателей/кнопки пожарной сигнализации
            </td>
            <td>2</td>
            <td>789 р.</td>
            <td><div class="tag tag--accent"><i class="fa-solid fa-circle"></i>Назначен</div></td>
            <td><div class="date"><i class="fa-regular fa-calendar"></i>14.09.23</div></td>
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
.date
  & i
    color: $gray
    font-size: 1.5rem
    margin-right: 0.8rem
</style>