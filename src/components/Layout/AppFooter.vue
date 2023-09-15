<template>
  <footer class="footer">
    <div class="container">
      <div class="footer_content">
        <div class="footer_logo">
          <h3>
            <i class="ri-home-smile-fill"></i>
            Сервис Строительства
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <ul class="footer_social">
            <li><a href="#"><i class="fa-brands fa-vk"></i></a></li>
          </ul>
        </div>
      </div>
      <ul class="footer_links">
        <li><a href="./">Главная</a></li>
        <li><a href="#">О сервисе</a></li>
        <li><a href="#">Контакты</a></li>
      </ul>
    </div>
  </footer>
</template>

<style lang="sass" scoped>
.footer
  background: $black
  background-image: url('~@/assets/images/style/waves.svg')
  background-repeat: no-repeat
  background-position: 100% 100%
  background-size: contain
  display: flex
  align-items: center
  padding: 10rem 0
  min-height: 42rem
  width: 100%
  & *
    color: $white
  & i
    font-size: 2.4rem
    color: $accent
  & p
    font-size: 1.9rem
    line-height: 3.2rem
    max-width: 40rem
  & .container
    display: flex
    align-items: center
    gap: 4.6rem
  &_social
    margin-top: 3.4rem
    & li a
      background: $accent
      border-radius: 0.3rem
      display: flex
      align-items: center
      justify-content: center
      transition: all 0.3s ease
      height: 4rem
      width: 4rem
      &:hover
        transform: scale(1.05)
    & i
      color: $black
      font-size: 2rem
  &_links
    display: grid
    grid-template-columns: 1fr
    grid-template-rows: repeat(3, auto)
    gap: 1.6rem
    & li a
      border: 1px solid #474747
      border-radius: 0.5rem
      font-weight: 600
      font-size: 1.5rem
      display: block
      padding: 1.2rem 3.2rem
      text-align: center
      transition: all 0.3s ease
      &:hover
        background: $white
        color: $black
    
</style>