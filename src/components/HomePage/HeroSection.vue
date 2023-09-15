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
    <div class="circle"><i class="fa-solid fa-hammer"></i></div>
    <h1>Как <span class="underline">работает сервис</span></h1>
    <ul class="how-it-works_list">
      <li class="card">
        <div><i class="fa-solid fa-file-invoice"></i></div>
        <h3>Получение готовой сметы проекта</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque non omnis voluptas 
        </p>
      </li>
      <li class="card">
        <div><i class="fa-solid fa-users"></i></div>
        <h3>Поиск подходящего специалиста</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio neque blanditiis sit hic
        </p>
      </li>
      <li class="card">
        <div><i class="fa-solid fa-trowel-bricks"></i></div>
        <h3>Проведение работ</h3>
        <p>
          Distinctio neque non omnis voluptas blanditiis sit hic
        </p>
      </li>
    </ul>
  </section>

  <section class="steps container">
    <div class="circle"><i class="fa-solid fa-stairs"></i></div>
    <h1>Этапы <span class="underline">ремонта</span></h1>
    <div class="steps_grid">
      <div class="steps_column">
        <div class="steps_item">
          <div class="steps_title">
            <div class="steps_number">I</div>
            <h3>Проектирование</h3>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi est, aliquam minima ex labore beatae, accusamus, in soluta voluptatum debitis tempora magnam numquam rem iure? Illo harum ullam incidunt eos!</p>
        </div>
        <div class="steps_item">
          <div class="steps_title">
            <div class="steps_number">III</div>
            <h3>Чистовые работы</h3>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi est, aliquam minima ex labore beatae, accusamus, in soluta voluptatum debitis tempora magnam numquam rem iure? Illo harum ullam incidunt eos!</p>
        </div>
      </div>
      <div class="steps_column steps_column--right">
        <div class="steps_item">
          <div class="steps_title">
            <div class="steps_number">II</div>
            <h3>Черновые работы</h3>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi est, aliquam minima ex labore beatae, accusamus, in soluta voluptatum debitis tempora magnam numquam rem iure? Illo harum ullam incidunt eos!</p>
        </div>
        <div class="steps_item">
          <div class="steps_title">
            <div class="steps_number">IV</div>
            <h3>Приемка результата</h3>
          </div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi est, aliquam minima ex labore beatae, accusamus, in soluta voluptatum debitis tempora magnam numquam rem iure? Illo harum ullam incidunt eos!</p>
        </div>
      </div>
      <div class="steps_background">
        <img :src="require(`@/assets/images/style/waves-white.svg`)">
      </div>
    </div>
    <!-- <div class="container">
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
    </div> -->
  </section>

  <section class="faq container">
    <div class="faq_content">
      <h2>
        Часто Задаваемые<br><span class="underline">Вопросы</span>
      </h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut sequi, molestiae placeat nihil illum accusantium beatae officiis maiore.
      </p>
      <button class="btn btn--black">Начать работу</button>
    </div>


    <div class="faq_grid">
      <div>
        <details class="question">
          <summary class="question_summary">
            Зачем нужен проект?
            <i class="ri-add-circle-fill"></i>
          </summary>
          <div class="question_answer">
            <p>
              Проект требуется для того, чтобы грамотно спланировать пространство квартиры, разработать правильную прокладку всех коммуникаций, подобрать все материалы и подготовить детальную смету.
            </p>
          </div>
        </details>
        <details class="question">
          <summary class="question_summary">
            Каковы сроки проектирования?
            <i class="ri-add-circle-fill"></i>
          </summary>
          <div class="question_answer">
            <p>
              Сроки проектирования зависят от того, какой ремонт планирует клиент. В среднем проектирование занимает от 3 недель. В состав проекта входят: замер помещения, зонирование пространства, разработка архитектурно-инженерных альбомов, подбор всех материалов и смета (дополнительно можно заказать 3D-визуализацию и услугу меблировки).
            </p>
          </div>
        </details>
        <details class="question">
          <summary class="question_summary">
            Сколько стоит проект?
            <i class="ri-add-circle-fill"></i>
          </summary>
          <div class="question_answer">
            <p>
              Стоимость проекта зависит от того какие опции будет включены в проект. Например: если вы планируете предусмотреть установку кондиционеров в вашей квартире, то для этого разрабатывается отдельный инженерный альбом с путем прокладки трасс от внешнего блока к внутренним. Рассчитывается мощность и готовится спецификация на оборудование. Это увеличит стоимость проекта. Чтобы узнать ориентировочную стоимость, обратитесь к нашему менеджеру.
            </p>
          </div>
        </details>
        <details class="question">
          <summary class="question_summary">
            Можете ли вы сделать ремонт по моему проекту?
            <i class="ri-add-circle-fill"></i>
          </summary>
          <div class="question_answer">
            <p>
              Нет, чтобы гарантировать качество ремонта и просчитать детальную смету, мы должны разработать проект по стандартам компании, а также выбрать материалы у поставщиков, в которых мы уверены.
            </p>
          </div>
        </details>
      </div>
      <div>
        <details class="question">
          <summary class="question_summary">
            Как узнать стоимость ремонта?
            <i class="ri-add-circle-fill"></i>
          </summary>
          <div class="question_answer">
            <p>
              Для предварительного расчета стоимости, свяжитесь с нашим менеджером. Он даст вам ориентир по стоимости на основании средней цены сметы по текущим проектам и ваших ожиданий по проекту ремонта. Получите индивидуальную планировку квартиры и консультацию по материалам с дизайнером в подарок! Это позволит вам еще до начала проектирования получить ориентир по всему бюджету на ремонт – не только по работам, но и по материалам.
            </p>
          </div>
        </details>
        <details class="question">
          <summary class="question_summary">
            Каковы сроки ремонта?
            <i class="ri-add-circle-fill"></i>
          </summary>
          <div class="question_answer">
            <p>
              Срок ремонта рассчитывается индивидуально, исходя из сложности проекта клиента. Приблизительный расчет по срокам можно получить на консультации у нашего менеджера.
            </p>
          </div>
        </details>
        <details class="question">
          <summary class="question_summary">
            Как происходит оплата?
            <i class="ri-add-circle-fill"></i>
          </summary>
          <div class="question_answer">
            <p>
              Мы разделим всю стоимость ремонта на 4 этапа. Вы внесете оплату за работы и материалы первого этапа, а за каждый следующий сможете платить после приема предыдущего.
            </p>
          </div>
        </details>
        <details class="question">
          <summary class="question_summary">
            Какие гарантии дает компания?
            <i class="ri-add-circle-fill"></i>
          </summary>
          <div class="question_answer">
            <p>
              Мы даем 1 год гарантии ремонта на работы и материалы.
            </p>
          </div>
        </details>
      </div>
    </div> 
  </section>

  
  <section class="cta container">
    <div class="cta_content">
      <h2>
        Остались вопросы?<br>
        <span class="underline">Свяжитесь </span> с нами!
      </h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <form class="cta_form">
        <input type="text" placeholder="Имя">
        <input type="text" placeholder="+7 999 999-99-99">
        <input type="submit" class="btn btn--black">
      </form>
    </div>
  </section>
  
</template>

<style lang="sass" scoped>
.hero
  background-color: $white
  padding-top: 12rem
  margin-bottom: 10rem
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
      &:hover
        background: $white
        border-color: $white
        color: $black

.how-it-works
  margin-bottom: 16rem
  &_list
    display: grid
    grid-template-columns: repeat(3, 1fr)
    gap: 3rem
    & li
      background: $black
      padding: 4.8rem
      margin: 0
      min-height: 28rem
      & div
        border-radius: 50% 
        background: $accent
        color: $black
        font-weight: 700
        display: flex
        align-items: center
        justify-content: center
        margin-bottom: 4.8rem
        height: 8rem
        width: 8rem
        & i
          font-size: 3rem
      & h3
        color: $white
        margin-bottom: 1rem
      & p
        color: #a0a0a0

.steps
  padding: 0 3rem
  margin-bottom: 16rem
  max-width: 90rem
  & .container
    background: $accent
    border-radius: $border-radius
    padding: 5rem 4rem
    max-width: 154rem
  &_grid
    display: grid
    grid-template-columns: repeat(2, 1fr)
    grid-template-rows: auto
    gap: 4rem
    position: relative
    margin-top: 2rem
  &_column
    display: grid
    grid-template-rows: repeat(2, 1fr)
    gap: 4rem
    margin-bottom: 8rem
    &--right
      margin: 8rem 0 0
  &_title
    display: flex
    align-items: center
    gap: 1.2rem
    padding-bottom: 3.2rem
    border-bottom: 1px solid $border
    margin-bottom: 3.2rem
  &_item
    border-radius: 1rem
    box-shadow: rgba(54, 14, 73, 0.08) 34px 34px 132px -32px
    background: $white
    padding: 4rem
  &_number
    background-color: $black
    border-radius: 50%
    width: 4rem
    height: 4rem
    display: flex
    align-items: center
    justify-content: center
    color: $accent
    font-weight: 700
    font-size: 2rem
  &_background
    background: #f1f1f1
    border-radius: 1.6rem
    position: absolute
    height: 40%
    width: 50%
    min-height: auto
    z-index: -1
    display: flex
    align-items: center
    justify-content: center
    overflow: hidden
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
  & h3
    font-size: 2.4rem
    margin: 0

.faq
  display: grid
  grid-template-columns: 1fr 0.8fr
  gap: 2rem
  margin-bottom: 16rem
  &_content
    & p
      margin-bottom: 3.2rem
      max-width: 48rem
.question
  border: 1px solid #e1e1e1
  border-radius: 1.2rem
  background-color: $col-white
  transition: 0.3s ease-in-out
  margin-bottom: 1rem
  &_summary
    cursor: pointer
    display: flex
    align-items: center
    justify-content: space-between
    font-weight: 700
    font-size: 1.8rem
    height: 7.4rem
    padding: 0 3.6rem 0 2.4rem
    & i
      font-size: 2.2rem
  &_answer p
    padding: 0 3.6rem 0 2.4rem
    font-size: 1.7rem
    line-height: 2.6rem
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

.cta
  margin-bottom: 16rem
  &_content
    background: $black
    background-image: url('~@/assets/images/style/waves-accent.svg')
    background-repeat: no-repeat
    background-position: 100% 100%
    background-size: contain
    border-radius: 1rem
    color: $white
    padding: 10rem
  & h2
    margin-bottom: 2.4rem
  & p
    margin-bottom: 4rem
  & span
    color: $accent
    display: inline-block
    background-position: 50% 97%
    padding-bottom: 2rem
  & form
    background: $white
    border-radius: 0.8rem
    display: flex
    align-items: center
    padding: 0.8rem 0.8rem 0.8rem 1.4rem
    height: 6.8rem
    width: 50%
  & input
    border: none
    border-radius: 0
    &:first-of-type
      border-right: 1px solid $border
  & .btn
    border-radius: 0.8rem
    cursor: pointer
    font-weight: 700
    max-width: 14rem
    &:hover
      background: $accent
      color: $black
</style>