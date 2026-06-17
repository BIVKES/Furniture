<template>
  <section class="bestsellers">
    <div class="bestsellers__container container">
      <div class="bestsellers__header">
        <h2 class="bestsellers__title">Бестселлеры</h2>
        <button @click="goToCatalog" class="bestsellers__btn">Все товары</button>
      </div>

      <div class="bestsellers__grid">
        <div 
          v-for="product in bestsellers" 
          :key="product.id"
          class="product-card"
        >
          <div class="product-image-wrap">
            <img :src="product.image" :alt="product.name">
            
            <span v-if="product.badge" class="product-badge">
              {{ product.badge }}
            </span>
            
            <div class="product-actions">
              <BaseButton 
                :variant="isInCart(product.id) ? 'in-cart' : 'primary'"
                size="mini" 
                @click="handleCartClick(product.id)"
              >
                {{ isInCart(product.id) ? 'В корзине' : 'В корзину' }}
              </BaseButton>
            </div>
          </div>
          
          <div class="product-info">
            <div class="product-name">{{ product.name }}</div>
            <div class="product-price">
              {{ formatPrice(product.price) }} ₽
              <span v-if="product.oldPrice" class="product-price-old">
                {{ formatPrice(product.oldPrice) }} ₽
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use './Bestsellers.scss' as *;
</style>

<script setup>
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useProductsStore } from '@/stores/products.js'
  import { useCartStore } from '@/stores/cart.js'
  import { storeToRefs } from 'pinia'

  const router = useRouter()
  const productsStore = useProductsStore()
  const cartStore = useCartStore()
  const { items } = storeToRefs(cartStore)

  const bestsellers = computed(() => {
    return productsStore.products.slice(0, 4)
  })

  const formatPrice = productsStore.formatPrice

  const isInCart = (productId) => {
    return items.value.some(item => item.id === productId)
  }

  const handleCartClick = (productId) => {
    if (!isInCart(productId)) {
      cartStore.addItem(productId)
    }
  }

  const goToCatalog = () => {
    router.push('/catalog')
  }
</script>