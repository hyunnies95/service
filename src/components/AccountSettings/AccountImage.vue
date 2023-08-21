<template>
  <div class="card">
    <h3>Фото профиля:</h3>
    <div class="card_upload">
      <img class="card_avatar" :src="require(`@/assets/images/avatar.jpg`)" alt="avatar">
      <input type="file">
    </div>
    <p class="card_text">
      Перетащите сюда изображение или нажмите, чтобы загурзить (png, jpg, jpeg).<br/>
      Допустимый размер не больше 5 MБ.
    </p>
    <button class="btn btn--black"><i class="fa-solid fa-upload"></i>Загрузить</button>

  </div>
</template>

<script>
export default {
  name: 'AccountImage',
}
</script>

<style lang="sass" scoped>
.card
  display: flex
  flex-direction: column
  align-items: center
  text-align: center
  &_upload
    cursor: pointer
    transition: all 0.3s ease
    margin-bottom: 1.6rem
    &:hover
      opacity: .6
  &_text
    font-size: 1.5rem
    line-height: 2.4rem
    margin-bottom: 3rem
    max-width: 25rem
.btn
  margin-top: auto
</style>
