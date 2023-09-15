<template>
  <div class="card">
    <h4>Информация об аккаунте:</h4>
    <form class="form">
      <div class="form_row">
        <div class="form_group">
          <label>Имя:</label>
          <input type="text" name="name" placeholder="Имя">
        </div>
        <div class="form_group">
          <label>Фамилия:</label>
          <input type="text" name="last_name" placeholder="Фамилия">
        </div>
        <div class="form_group">
          <label>Отчество:</label>
          <input type="text" name="Patronymic" placeholder="Отчество">
        </div>
      </div>
      <div class="form_group">
        <label>Email:</label>
        <input type="email" name="email" placeholder="example@example.com">
      </div>

      <div class="form_row">
        <div class="form_group">
          <label>Адрес:</label>
          <input type="text" name="street" placeholder="Улица">
        </div>
        <div class="form_group">
          <input type="text" name="city" placeholder="Город">
        </div>
      </div>

      <div class="form_row">
        <div class="form_group">
          <input type="text" name="street" placeholder="Область">
        </div>
        <div class="form_group">
          <input type="text" name="city" placeholder="Страна" value="Россия">
        </div>
        <div class="form_group">
          <input type="text" name="city" placeholder="Почтовый индекс">
        </div>
      </div>

      <div class="form_row">
        <div class="form_group">
          <label>Телефон:</label>
          <input type="text" name="phone" placeholder="+7 (999) 999-99-99">
        </div>
        <div class="form_group">
          <label>Как вы узнали о нас?</label>
          <input type="text" name="learn" placeholder="">
        </div>
      </div>
    </form>
    <button class="btn btn--black">Сохранить</button>
  </div>
</template>

<script>
export default {
  name: 'AccountInfo',
}
</script>

<style lang="sass" scoped>
.card
  grid-column: 1 / 3
.form
  margin-bottom: 2rem
.btn
  margin-left: auto
</style>
