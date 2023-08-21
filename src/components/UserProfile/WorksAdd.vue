<template>
  <div class="modal">
    <div class="overlay" @click="this.$emit('close')"></div>
    <div class="card">
      <div class="card_header">
        <h3>Добавить работы:</h3>
        <button class="close" @click="this.$emit('close')">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <button class="btn btn--black">Добавить</button>
    </div>
  </div>
</template>
