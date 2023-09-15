<template>
  <div class="card">
    <h4>Пароль:</h4>
    <form class="form">
      <div class="form_group">
        <label for="password">Старый пароль:</label>
        <input type="password" id="old_password" name="old_password">
      </div>
      <div class="form_row">
        <div class="form_group">
          <label for="password">Новый пароль:</label>
          <input type="password" id="new_password" name="new_password">
        </div>
        <div class="form_group">
          <label for="password">Подтвердите пароль:</label>
          <input type="password" id="confirm_password" name="confirm_password">
        </div>
      </div>
    </form>
    <button class="btn btn--black">Сохранить</button>
  </div>
</template>

<script>
export default {
  name: 'AccountPassword',
}
</script>

<style lang="sass" scoped>
.card
  display: flex
  flex-direction: column

.btn
  margin-left: auto
  margin-top: auto

</style>
