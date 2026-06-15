<!-- src/pages/About/About.vue -->
<template>
  <div class="about-page">

    <div class="about-page__breadcrumbs container">
      <RouterLink to="/" class="about-page__breadcrumbs-link">Главная</RouterLink>
      <span class="about-page__breadcrumbs-separator">/</span>
      <span class="about-page__breadcrumbs-current">О нас</span>
    </div>

    <div class="about-page__header container">
      <h1 class="about-page__title">О нас</h1>
    </div>

    <section class="about-hero">
      <div class="about-hero__container container">
        <div class="about-hero__content">
          <h2 class="about-hero__title">Мы создаем мебель, которая живет десятилетия</h2>
          <p class="about-hero__desc">
            Nordic Furniture — это семейная мастерская, основанная в 2015 году в Санкт-Петербурге. 
            Мы специализируемся на создании скандинавской мебели из натуральных материалов: 
            массива дуба, бука, натуральной шерсти и льна.
          </p>
          <p class="about-hero__text">
            Каждое изделие проходит путь от эскиза до готового продукта в нашей мастерской. 
            Мы не используем ДСП и МДФ — только цельный деревянный массив, который проходит 
            многоступенчатую сушку и обработку. Наша философия проста: честность материалов, 
            функциональность форм и внимание к деталям.
          </p>
        </div>
        <div class="about-hero__image">
          <img src="/images/about.jpg" alt="Мастерская Nordic Furniture" class="about-hero__img">
        </div>
      </div>
    </section>

    <section class="about-values">
      <div class="about-values__container container">
        <h2 class="about-values__title">Наши принципы</h2>
        <div class="about-values__grid">
          <div class="value-card">
            <div class="value-card__icon">
              <svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h3 class="value-card__title">Качество</h3>
            <p class="value-card__desc">
              Только натуральные материалы. Каждое изделие проходит 7 этапов контроля качества перед отправкой клиенту.
            </p>
          </div>
          <div class="value-card">
            <div class="value-card__icon">
              <svg class="icon" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h3 class="value-card__title">Локальность</h3>
            <p class="value-card__desc">
              Вся мебель производится в Санкт-Петербурге. Мы работаем с поставщиками из Карелии и Ленинградской области.
            </p>
          </div>
          <div class="value-card">
            <div class="value-card__icon">
              <svg class="icon" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
            </div>
            <h3 class="value-card__title">Экология</h3>
            <p class="value-card__desc">
              Мы используем только экологичные материалы и покрытия. Наше производство — zero waste, отходы идут на отопление мастерской.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-workshop">
      <div class="about-workshop__container container">
        <div class="about-workshop__image">
          <img src="/images/Mastery.jpeg" alt="Мастерская" class="about-workshop__img">
        </div>
        <div class="about-workshop__content">
          <h2 class="about-workshop__title">Мастерская, где рождается мебель</h2>
          <p class="about-workshop__desc">
            Наша мастерская площадью 800 м² расположена на окраине Санкт-Петербурга. 
            Здесь работают 12 мастеров — плотники, обивщики, столеры с опытом от 10 лет.
          </p>
          <p class="about-workshop__text">
            Мы открываем двери для экскурсий каждую субботу. Приходите увидеть, 
            как из необработанного массива рождается кресло, которое прослужит десятилетия.
          </p>
          <BaseButton variant="secondary" to="/contacts">
            Записаться на экскурсию
          </BaseButton>
        </div>
      </div>
    </section>

    <section class="about-stats">
      <div class="about-stats__container container">
        <div class="about-stats__grid">
          <div class="stat-item">
            <div class="stat-item__number">9+</div>
            <div class="stat-item__label">Лет на рынке</div>
          </div>
          <div class="stat-item">
            <div class="stat-item__number">5000+</div>
            <div class="stat-item__label">Изделий создано</div>
          </div>
          <div class="stat-item">
            <div class="stat-item__number">12</div>
            <div class="stat-item__label">Мастеров в команде</div>
          </div>
          <div class="stat-item">
            <div class="stat-item__number">800м²</div>
            <div class="stat-item__label">Площадь мастерской</div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-materials">
      <div class="about-materials__container container">
        <h2 class="about-materials__title">Материалы, которым мы доверяем</h2>
        <div class="about-materials__grid">
          <div class="material-card">
            <img src="/images/dub.jpg" alt="Дуб" class="material-card__img">
            <h3 class="material-card__title">Массив дуба</h3>
            <p class="material-card__desc">Каркасы и ножки. Дуб из Карелии, естественная сушка 2 года.</p>
          </div>
          <div class="material-card">
            <img src="/images/wool.png" alt="Шерсть" class="material-card__img">
            <h3 class="material-card__title">Натуральная шерсть</h3>
            <p class="material-card__desc">Обивка кресел и диванов. Новозеландская шерсть, плотность 400г/м².</p>
          </div>
          <div class="material-card">
            <img src="/images/flax.jpeg" alt="Лен" class="material-card__img">
            <h3 class="material-card__title">Лен</h3>
            <p class="material-card__desc">Чехлы и подушки. Белорусский лен, выращенный без пестицидов.</p>
          </div>
          <div class="material-card">
            <img src="/images/brass.jpeg" alt="Латунь" class="material-card__img">
            <h3 class="material-card__title">Латунь</h3>
            <p class="material-card__desc">Фурнитура и освещение. Итальянская латунь, ручная полировка.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="about-cta">
      <div class="about-cta__container container">
        <h2 class="about-cta__title">Приходите в шоурум</h2>
        <p class="about-cta__desc">
          Санкт-Петербург, ул. Мебельная, 12<br>
          Ежедневно с 10:00 до 20:00
        </p>
        <BaseButton variant="primary" size="large" to="/catalog">
          Смотреть коллекцию
        </BaseButton>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
    @use './About.scss' as *;
</style>