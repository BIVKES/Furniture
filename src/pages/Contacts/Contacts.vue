<!-- src/pages/Contacts/Contacts.vue -->
<template>
  <div class="contacts-page">
    <!-- Breadcrumbs -->
    <div class="contacts-page__breadcrumbs container">
      <RouterLink to="/" class="contacts-page__breadcrumbs-link">Главная</RouterLink>
      <span class="contacts-page__breadcrumbs-separator">/</span>
      <span class="contacts-page__breadcrumbs-current">Контакты</span>
    </div>

    <div class="contacts-page__header container">
      <h1 class="contacts-page__title">Контакты</h1>
    </div>

    <section class="contacts-main">
      <div class="contacts-main__container container">

        <div class="contacts-info">
          <div class="contacts-info__block">
            <h3 class="contacts-info__title">Адрес шоурума</h3>
            <p class="contacts-info__text">Санкт-Петербург, ул. Мебельная, 12</p>
            <p class="contacts-info__note">Ежедневно с 10:00 до 20:00</p>
          </div>

          <div class="contacts-info__block">
            <h3 class="contacts-info__title">Телефон</h3>
            <a href="tel:+79991234567" class="contacts-info__link">+7 (999) 123-45-67</a>
            <p class="contacts-info__note">Ежедневно с 9:00 до 21:00</p>
          </div>

          <div class="contacts-info__block">
            <h3 class="contacts-info__title">Email</h3>
            <a href="mailto:hello@nordicfurniture.ru" class="contacts-info__link">hello@nordicfurniture.ru</a>
            <p class="contacts-info__note">Ответим в течение 24 часов</p>
          </div>

          <div class="contacts-info__block">
            <h3 class="contacts-info__title">Мессенджеры</h3>
            <div class="contacts-info__messengers">
              <a href="https://www.whatsapp.com/?lang=ru" class="contacts-info__messenger">WhatsApp</a>
              <a href="https://telegram.org/" class="contacts-info__messenger">Telegram</a>
            </div>
          </div>
        </div>

        <div class="contacts-form">
          <h3 class="contacts-form__title">Напишите нам</h3>
          <form class="contacts-form__form" @submit.prevent="submitForm">
            <div class="contacts-form__group">
              <label class="contacts-form__label">Ваше имя</label>
              <input 
                type="text" 
                class="contacts-form__input" 
                placeholder="Иван" 
                required
              >
            </div>
            <div class="contacts-form__group">
              <label class="contacts-form__label">Email</label>
              <input 
                type="email" 
                class="contacts-form__input" 
                placeholder="your@email.com" 
                required
              >
            </div>
            <div class="contacts-form__group">
              <label class="contacts-form__label">Телефон</label>
              <input 
                type="tel" 
                class="contacts-form__input" 
                placeholder="+7 (999) 123-45-67"
              >
            </div>
            <div class="contacts-form__group">
              <label class="contacts-form__label">Сообщение</label>
              <textarea 
                class="contacts-form__textarea" 
                placeholder="Расскажите, что вас интересует..." 
                required
              ></textarea>
            </div>
            <button type="submit" class="contacts-form__submit">
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </section>

    <section class="contacts-map">
      <div class="contacts-map__placeholder">
        <svg class="icon contacts-map__icon" viewBox="0 0 24 24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <p class="contacts-map__text">Карта с адресом шоурума</p>
        <p class="contacts-map__address">Санкт-Петербург, ул. Мебельная, 12</p>
      </div>
    </section>
  </div>
</template>

<script setup>
    const submitForm = () => {
    alert('Спасибо! Мы ответим вам в течение 24 часов.')
    }
</script>

<style scoped lang="scss">
    @use './Contacts.scss' as *;        
</style>