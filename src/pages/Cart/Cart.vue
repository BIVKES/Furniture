<template>
  <div class="cart-page">
    <div class="cart-page__header container">
      <h1 class="cart-page__title">Корзина</h1>
      <span class="cart-page__count">3 товара</span>
    </div>

    <div class="cart-page__layout container">
      <div class="cart-items">
        <div 
          v-for="item in cartItems" 
          :key="item.id"
          class="cart-item"
        >
          <div class="cart-item__image">
            <img :src="item.image" :alt="item.name" class="cart-item__img">
          </div>
          
          <div class="cart-item__info">
            <div class="cart-item__name">{{ item.name }}</div>
            <div class="cart-item__variant">{{ item.variant }}</div>
            <div class="cart-item__sku">Арт. {{ item.sku }}</div>
          </div>
          
          <div class="cart-item__quantity quantity">
            <button 
              class="quantity__btn" 
              @click="decreaseQty(item)"
            >−</button>
            <div class="quantity__value">{{ item.qty }}</div>
            <button 
              class="quantity__btn" 
              @click="increaseQty(item)"
            >+</button>
          </div>
          
          <div class="cart-item__price">{{ formatPrice(item.price * item.qty) }} ₽</div>
          
          <button 
            class="cart-item__remove" 
            @click="removeItem(item)"
            aria-label="Удалить"
          >
            <svg class="icon" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <button class="cart-items__back" @click="goToCatalog">
          <svg class="icon" viewBox="0 0 24 24" style="width: 16px; height: 16px;">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Продолжить покупки
        </button>
      </div>

      <div class="cart-summary">
        <h3 class="cart-summary__title">Сводка</h3>
        
        <form class="cart-summary__promo promo" @submit.prevent="applyPromo">
          <input 
            type="text" 
            class="promo__input" 
            placeholder="Промокод"
            v-model="promoCode"
          >
          <button type="submit" class="promo__btn">Применить</button>
        </form>
        
        <div class="cart-summary__row">
          <span>Подытог</span>
          <span>{{ formatPrice(subtotal) }} ₽</span>
        </div>
        <div class="cart-summary__row">
          <span>Доставка</span>
          <span>Бесплатно</span>
        </div>
        <div class="cart-summary__row cart-summary__row--discount">
          <span>Скидка</span>
          <span>−{{ formatPrice(discount) }} ₽</span>
        </div>
        
        <hr class="cart-summary__divider">
        
        <div class="cart-summary__total">
          <span>Итого</span>
          <span class="cart-summary__total-value">{{ formatPrice(total) }} ₽</span>
        </div>
        
        <BaseButton 
          variant="primary" 
          size="large" 
          full 
          @click="goToCheckout"
        >
          Оформить заказ
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const cartItems = ref([
  {
    id: 1,
    name: 'Кресло Bergen',
    variant: 'Коричневый, Дуб',
    sku: 'NR-2024-001',
    price: 45000,
    qty: 1,
    image: 'images/Lund.jpg'
  },
  {
    id: 2,
    name: 'Диван Oslo',
    variant: 'Серый, Текстиль',
    sku: 'NR-2024-015',
    price: 127000,
    qty: 1,
    image: 'images/sofa.jpg'
  },
  {
    id: 3,
    name: 'Светильник Nordic',
    variant: 'Латунь',
    sku: 'NR-2024-042',
    price: 18500,
    qty: 2,
    image: 'images/Helsinki.jpg'
  }
])

const promoCode = ref('')

const subtotal = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.qty, 0)
})

const discount = ref(15000)

const total = computed(() => {
  return subtotal.value - discount.value
})

const formatPrice = (price) => {
  return price.toLocaleString('ru-RU')
}

const increaseQty = (item) => {
  item.qty++
}

const decreaseQty = (item) => {
  if (item.qty > 1) item.qty--
}

const removeItem = (item) => {
  cartItems.value = cartItems.value.filter(i => i.id !== item.id)
}

const applyPromo = () => {
  alert(`Промокод ${promoCode.value} применен!`)
}

const goToCatalog = () => {
  router.push('/catalog')
}

const goToCheckout = () => {
  router.push('/checkout')
}
</script>

<style scoped lang="scss">
  @use './Cart.scss' as * 

</style>