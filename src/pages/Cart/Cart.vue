<template>
  <div class="cart-page">
    <div class="cart-page__header container">
      <h1 class="cart-page__title">Корзина</h1>
      <span class="cart-page__count">{{ totalItems }} товара</span>
    </div>

    <div class="cart-page__layout container">
      <div class="cart-items">
        <div v-if="cartProducts.length === 0" class="cart-items__empty">
          Корзина пуста
        </div>
        
        <div 
          v-for="item in cartProducts" 
          :key="item.id"
          class="cart-item"
        >
          <div class="cart-item__image">
            <img :src="item.image" :alt="item.name" class="cart-item__img">
          </div>
          
          <div class="cart-item__info">
            <div class="cart-item__name">{{ item.name }}</div>
            <div class="cart-item__variant">Стандарт</div>
            <div class="cart-item__sku">Арт. {{ item.id }}</div>
          </div>
          
          <div class="cart-item__quantity quantity">
            <button 
              class="quantity__btn" 
              @click="decreaseQty(item.id)"
            >−</button>
            <div class="quantity__value">{{ item.qty }}</div>
            <button 
              class="quantity__btn" 
              @click="increaseQty(item.id)"
            >+</button>
          </div>
          
          <div class="cart-item__price">{{ formatPrice(item.price * item.qty) }} ₽</div>
          
          <button 
            class="cart-item__remove" 
            @click="removeItem(item.id)"
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
          <span class="cart-summary__total-value">{{ formatPrice(subtotal - discount) }} ₽</span>
        </div>
        
        <BaseButton 
          variant="primary" 
          size="large" 
          full 
          @click="alert('В разработке')"
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
  import { useCartStore } from '@/stores/cart.js'
  import { useProductsStore } from '@/stores/products.js'
  import { storeToRefs } from 'pinia'

  const router = useRouter()
  const cartStore = useCartStore()
  const productsStore = useProductsStore()
  const { items, totalItems } = storeToRefs(cartStore)

  const promoCode = ref('')
  const discount = ref(15000)

  const cartProducts = computed(() => {
    return items.value.map(cartItem => {
      const product = productsStore.getById(cartItem.id)
      return {
        ...product,
        qty: cartItem.qty
      }
    }).filter(item => item.id !== undefined) 
  })

  const subtotal = computed(() => {
    return cartProducts.value.reduce((sum, item) => sum + item.price * item.qty, 0)
  })

  const formatPrice = productsStore.formatPrice

  const removeItem = (id) => cartStore.removeItem(id)
  const increaseQty = (id) => cartStore.increaseQty(id)
  const decreaseQty = (id) => cartStore.decreaseQty(id)

  const applyPromo = () => {
    alert(`Промокод ${promoCode.value} применен!`)
  }

  const goToCatalog = () => {
    router.push('/catalog')
  }
</script>

<style scoped lang="scss">
  @use './Cart.scss' as * 
</style>