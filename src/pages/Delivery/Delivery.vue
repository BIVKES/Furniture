<template>
  <div class="delivery-page">

    <div class="delivery-page__breadcrumbs container">
      <RouterLink to="/" class="delivery-page__breadcrumbs-link">Главная</RouterLink>
      <span class="delivery-page__breadcrumbs-separator">/</span>
      <span class="delivery-page__breadcrumbs-current">Доставка</span>
    </div>

    <div class="delivery-page__header container">
      <h1 class="delivery-page__title">Доставка и оплата</h1>
    </div>

    <section class="delivery-methods">
      <div class="delivery-methods__container container">
        <h2 class="delivery-methods__title">Способы доставки</h2>
        <div class="delivery-methods__grid">
          <div class="delivery-card">
            <div class="delivery-card__icon-delivery"></div>
            <h3 class="delivery-card__title">Курьерская доставка</h3>
            <p class="delivery-card__desc">Доставка до двери в удобное время. Курьер позвонит за час до прибытия.</p>
            <div class="delivery-card__price">Бесплатно</div>
            <div class="delivery-card__time">1-3 рабочих дня</div>
          </div>

          <div class="delivery-card">
            <div class="delivery-card__icon-map"></div>
            <h3 class="delivery-card__title">Самовывоз</h3>
            <p class="delivery-card__desc">Заберите заказ из нашего шоурума. Предварительно соберем и подготовим.</p>
            <div class="delivery-card__price">Бесплатно</div>
            <div class="delivery-card__time">В день заказа</div>
          </div>

          <div class="delivery-card">
            <div class="delivery-card__icon-mail"></div>
            <h3 class="delivery-card__title">Почта России</h3>
            <p class="delivery-card__desc">Доставка в любой регион. Упаковка из гофрокартона и пленки.</p>
            <div class="delivery-card__price">500 ₽</div>
            <div class="delivery-card__time">5-10 рабочих дней</div>
          </div>
        </div>
      </div>
    </section>

    <section class="payment-methods">
      <div class="payment-methods__container container">
        <h2 class="payment-methods__title">Способы оплаты</h2>
        <div class="payment-methods__grid">
          <div class="payment-card">
            <div class="payment-card__icon-credit-card"></div>
            <div class="payment-card__content">
              <h3 class="payment-card__title">Картой онлайн</h3>
              <p class="payment-card__desc">Visa, Mastercard, Мир. Оплата через защищенный шлюз Сбербанка. Комиссия 0%.</p>
            </div>
          </div>

          <div class="payment-card">
            <div class="payment-card__icon-dollar"></div>
            <div class="payment-card__content">
              <h3 class="payment-card__title">При получении</h3>
              <p class="payment-card__desc">Наличными или картой курьеру. Доступно только для курьерской доставки по СПб.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="delivery-process">
      <div class="delivery-process__container container">
        <h2 class="delivery-process__title">Как мы доставляем</h2>
        <div class="delivery-process__grid">
          <div class="process-step">
            <div class="process-step__number">1</div>
            <h3 class="process-step__title">Заказ</h3>
            <p class="process-step__desc">Оформляете заказ на сайте или по телефону. Менеджер подтверждает наличие.</p>
          </div>
          <div class="process-step">
            <div class="process-step__number">2</div>
            <h3 class="process-step__title">Сборка</h3>
            <p class="process-step__desc">Собираем и упаковываем заказ в мастерской. Проверяем качество.</p>
          </div>
          <div class="process-step">
            <div class="process-step__number">3</div>
            <h3 class="process-step__title">Доставка</h3>
            <p class="process-step__desc">Передаем курьеру или в пункт выдачи. Отправляем трек-номер.</p>
          </div>
          <div class="process-step">
            <div class="process-step__number">4</div>
            <h3 class="process-step__title">Получение</h3>
            <p class="process-step__desc">Проверяете товар при получении. Подписываете акт приемки.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="delivery-faq">
      <div class="delivery-faq__container container">
        <h2 class="delivery-faq__title">Частые вопросы</h2>
        <div class="delivery-faq__list">
          <div class="faq-item">
            <h3 class="faq-item__question">Можно ли вернуть товар?</h3>
            <p class="faq-item__answer">Да, в течение 14 дней с момента получения. Товар должен быть в оригинальной упаковке, без следов сборки и использования. Мы забираем товар курьером за свой счет.</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-item__question">Сколько стоит подъем на этаж?</h3>
            <p class="faq-item__answer">Подъем на лифте — бесплатно. Ручной подъем: 300 ₽ за этаж. Крупногабаритные товары (диваны, шкафы) доставляем только до двери квартиры.</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-item__question">Доставляете в другие города?</h3>
            <p class="faq-item__answer">Да, по всей России через Почту России или транспортные компании (СДЭК, Байкал). Срок и стоимость рассчитываются индивидуально при оформлении.</p>
          </div>
          <div class="faq-item">
            <h3 class="faq-item__question">Есть ли гарантия?</h3>
            <p class="faq-item__answer">Гарантия на всю мебель — 3 года. На освещение и фурнитуру — 1 год. Гарантия распространяется на конструктивные дефекты, не связанные с эксплуатацией.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
    @use './Delivery.scss' as *;
</style>