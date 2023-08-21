<template>
  <section class="hero">
    <div class="hero_banner container">
      <div class="hero_image">
        <div class="hero_overlay"></div>
        <div class="hero_content">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
          <h1>Сервис Строительства</h1>
          <button class="btn btn--accent" @click="this.$emit('open-modal')">Начать работу</button>
        </div>
      </div>
    </div>
  </section>

  <section class="how-it-works container">
    <h2>Как работает сервис</h2>
    <ul class="how-it-works_list">
      <li class="card">
        <div>1</div>
        <h3>Получение готовой сметы проекта</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque non omnis voluptas 
        </p>
      </li>
      <li class="card">
        <div>2</div>
        <h3>Поиск подходящего специалиста</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque blanditiis sit hic
        </p>
      </li>
      <li class="card">
        <div>3</div>
        <h3>Проведение работ</h3>
        <p>
          Distinctio neque non omnis voluptas blanditiis sit hic
        </p>
      </li>
    </ul>
  </section>
  
  <section class="steps">
    <div class="container">
      <h2>Этапы ремонта</h2>
      <ul class="steps_list">
        <li class="card">
          <div class="icon"><i class="fa-solid fa-compass-drafting"></i></div>
          <div>
            <h3>Проектирование</h3>
            <p>
              Вы заключаете с нами договор и вносите оплату за первый этап
            </p>
          </div>
        </li>
        <li class="card">
          <div class="icon"><i class="fa-solid fa-hammer"></i></div>
          <div>
            <h3>Ремонт</h3>
            <p>
              Отслеживайте прогресс работ 
            </p>
          </div>
        </li>
        <li class="card">
          <div class="icon"><i class="fa-solid fa-building-circle-check"></i></div>
          <div>
            <h3>Приемка результата</h3>
            <p>
              Перед финальной сдачей объект проходит несколько этапов проверки
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <div class="faq container">
    <h2 class="faq__title">Вопросы и ответы</h2>
    <div class="faq__grid">
      <div>
        <details class="question">
          <summary class="question__summary">
            Зачем нужен проект?
          </summary>
          <div class="question__answer">
            <p>
              Проект требуется для того, чтобы грамотно спланировать пространство квартиры, разработать правильную прокладку всех коммуникаций, подобрать все материалы и подготовить детальную смету.
            </p>
          </div>
        </details>
        <details class="question">
          <summary class="question__summary">
            Каковы сроки проектирования?
          </summary>
          <div class="question__answer">
            <p>
              Сроки проектирования зависят от того, какой ремонт планирует клиент. В среднем проектирование занимает от 3 недель. В состав проекта входят: замер помещения, зонирование пространства, разработка архитектурно-инженерных альбомов, подбор всех материалов и смета (дополнительно можно заказать 3D-визуализацию и услугу меблировки).
            </p>
          </div>
        </details>
        <details class="question">
          <summary class="question__summary">
            Сколько стоит проект?
          </summary>
          <div class="question__answer">
            <p>
              Стоимость проекта зависит от того какие опции будет включены в проект. Например: если вы планируете предусмотреть установку кондиционеров в вашей квартире, то для этого разрабатывается отдельный инженерный альбом с путем прокладки трасс от внешнего блока к внутренним. Рассчитывается мощность и готовится спецификация на оборудование. Это увеличит стоимость проекта. Чтобы узнать ориентировочную стоимость, обратитесь к нашему менеджеру.
            </p>
          </div>
        </details>
        <details class="question">
          <summary class="question__summary">
            Можете ли вы сделать ремонт по моему проекту?
          </summary>
          <div class="question__answer">
            <p>
              Нет, чтобы гарантировать качество ремонта и просчитать детальную смету, мы должны разработать проект по стандартам компании, а также выбрать материалы у поставщиков, в которых мы уверены.
            </p>
          </div>
        </details>
      </div>
      <div>
        <details class="question">
          <summary class="question__summary">
            Как узнать стоимость ремонта?
          </summary>
          <div class="question__answer">
            <p>
              Для предварительного расчета стоимости, свяжитесь с нашим менеджером. Он даст вам ориентир по стоимости на основании средней цены сметы по текущим проектам и ваших ожиданий по проекту ремонта. Получите индивидуальную планировку квартиры и консультацию по материалам с дизайнером в подарок! Это позволит вам еще до начала проектирования получить ориентир по всему бюджету на ремонт – не только по работам, но и по материалам.
            </p>
          </div>
        </details>
        <details class="question">
          <summary class="question__summary">
            Каковы сроки ремонта?
          </summary>
          <div class="question__answer">
            <p>
              Срок ремонта рассчитывается индивидуально, исходя из сложности проекта клиента. Приблизительный расчет по срокам можно получить на консультации у нашего менеджера.
            </p>
          </div>
        </details>
        <details class="question">
          <summary class="question__summary">
            Как происходит оплата?
          </summary>
          <div class="question__answer">
            <p>
              Мы разделим всю стоимость ремонта на 4 этапа. Вы внесете оплату за работы и материалы первого этапа, а за каждый следующий сможете платить после приема предыдущего.
            </p>
          </div>
        </details>
        <details class="question">
          <summary class="question__summary">
            Какие гарантии дает компания?
          </summary>
          <div class="question__answer">
            <p>
              Мы даем 1 год гарантии ремонта на работы и материалы.
            </p>
          </div>
        </details>
      </div>
    </div> 
  </div>
</template>

<style lang="sass" scoped>
.hero
  background-color: $white
  margin-bottom: 8rem
  &_banner
    padding: 0.2rem 3rem 5rem
    width: 100%
  &_image
    background-image: url('~@/assets/images/hero1.jpg')
    background-position: center
    background-size: cover
    border-radius: 1rem
    display: flex
    justify-content: center
    position: relative
    min-height: 58rem
    width: 100%
  &_overlay
    background: rgb(0,0,0)
    background: linear-gradient(153deg, rgba(4,25,46,.5) 35%, rgba(4,25,46,.6) 58%)
    border-radius: 1rem
    position: absolute
    opacity: 0.77
    height: 100%
    width: 100%
  &_content
    color: $white
    margin-top: 16rem
    text-align: center
    z-index: 1
    & p
      font-size: 2.1rem
      font-weight: 600
    & button
      margin: 3rem auto 0

.how-it-works
  margin-bottom: 8rem
  &_list
    display: grid
    grid-template-columns: repeat(3, 1fr)
    gap: 1.6rem
    & li
      transition: all 0.3s ease
      position: relative
      padding: 4rem
      margin: 0
      min-height: 28rem
      &:hover
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15)
      & div
        border-radius: 50% 
        border: 2px solid $accent
        color: $accent
        font-weight: 700
        display: flex
        align-items: center
        justify-content: center
        position: absolute
        left: 4rem
        top: 4rem
        height: 4rem
        width: 4rem
      & h3
        margin-top: 9.2rem
        margin-bottom: 1rem
      & p

.steps
  padding: 0 3rem
  margin-bottom: 8rem
  & .container
    background: $accent
    border-radius: $border-radius
    padding: 5rem 4rem
    max-width: 154rem
  & h2

  &_list
    & li
      background: #222
      box-shadow: none
      display: flex
      align-items: center
      justify-content: space-between
      gap: 2.6rem
      transition: all 0.3s ease
      padding: 2rem 3rem 2rem 2rem
      margin-bottom: 1rem
      margin-left: auto
      min-height: 11rem
      width: 50%
      &:hover
        transform: translateX(-1rem)
      & h3, p
        color: $accent
        text-align: right
        margin: 0
      & p
        opacity: .7

.faq
  margin-bottom: 8rem
  &__grid
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 1.6rem
.question
  border: 1px solid transparent
  border-radius: 0.7rem
  box-shadow: $card-shadow
  background-color: $col-white

  transition: 0.3s ease-in-out
  padding: 0 3.6rem
  margin-bottom: 1.6rem
  &:hover
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15)
  &__summary
    cursor: pointer
    display: flex
    align-items: center
    font-weight: 600
    font-size: 2.3rem
    height: 10rem
  &__answer
    margin-bottom: 3rem

.icon
  border-radius: 50% 
  background: $accent
  font-weight: 700
  display: flex
  align-items: center
  justify-content: center
  height: 6.6rem
  min-width: 6.6rem
  & i
    color: $black
    font-size: 2rem



h2
  font-family: 'Nunito', sans-serif
  font-size: 4.6rem
  font-weight: 700
  margin-bottom: 4rem
</style>