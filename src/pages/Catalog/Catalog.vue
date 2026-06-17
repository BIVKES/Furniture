<template>
  <div class="catalog">

    <div class="catalog__breadcrumbs container">
      <RouterLink to="/" class="catalog__breadcrumbs-link">Главная</RouterLink>
      <span class="catalog__breadcrumbs-separator">/</span>
      <span class="catalog__breadcrumbs-current">Каталог</span>
    </div>

    <div class="catalog__header container">
      <h1 class="catalog__title">Каталог</h1>
    </div>

    <div class="catalog__layout container">

      <button 
        class="catalog__sidebar-toggle" 
        @click="toggleSidebar"
      >
        <svg class="icon" viewBox="0 0 24 24">
          <path v-if="!sidebarOpen" d="M3 12h18M3 6h18M3 18h18"/>
          <path v-else d="M18 6L6 18M6 6l12 12"/>
        </svg>
        {{ sidebarOpen ? 'Скрыть фильтры' : 'Фильтры' }}
      </button>
      
      <aside class="catalog__sidebar sidebar" :class="{ 'is-open': sidebarOpen }">
        <div class="sidebar__group">
          <div class="sidebar__group-title">Категории</div>
          <ul class="sidebar__list">
            <li 
              v-for="cat in categories" 
              :key="cat.id"
              class="sidebar__item"
            >
              <label class="sidebar__checkbox checkbox">
                <input 
                  type="checkbox" 
                  class="checkbox__input"
                  :checked="cat.checked"
                >
                <span class="checkbox__text">
                  {{ cat.name }} 
                  <span class="checkbox__count">({{ cat.count }})</span>
                </span>
              </label>
            </li>
          </ul>
        </div>

        <div class="sidebar__group">
          <div class="sidebar__group-title">Цена</div>
          <div class="sidebar__price-range price-range">
            <input 
              type="number" 
              class="price-range__input" 
              placeholder="От" 
              value="15000"
            >
            <input 
              type="number" 
              class="price-range__input" 
              placeholder="До" 
              value="150000"
            >
          </div>
        </div>

        <div class="sidebar__group">
          <div class="sidebar__group-title">Цвет</div>
          <div class="sidebar__colors colors">
            <div 
              v-for="color in colors" 
              :key="color.id"
              class="colors__item"
              :class="{ 'colors__item--active': color.active }"
              :style="{ background: color.hex }"
              :title="color.name"
            ></div>
          </div>
        </div>

        <div class="sidebar__group">
          <div class="sidebar__group-title">Материал</div>
          <ul class="sidebar__list">
            <li 
              v-for="mat in materials" 
              :key="mat.id"
              class="sidebar__item"
            >
              <label class="sidebar__checkbox checkbox">
                <input type="checkbox" class="checkbox__input">
                <span class="checkbox__text">
                  {{ mat.name }} 
                  <span class="checkbox__count">({{ mat.count }})</span>
                </span>
              </label>
            </li>
          </ul>
        </div>
      </aside>

      <div class="catalog__content">
        <div class="catalog__top">
          <div class="catalog__results">Показано {{ products.length }} из {{ products.length }} товаров</div>
          <select class="catalog__sort sort">
            <option class="sort__option">По популярности</option>
            <option class="sort__option">Сначала дешевле</option>
            <option class="sort__option">Сначала дороже</option>
            <option class="sort__option">По новизне</option>
          </select>
        </div>

        <div class="catalog__products products">
          <div 
            v-for="product in products" 
            :key="product.id"
            class="products__item product-card"
          >
            <div class="product-card__image-wrap">
              <img 
                :src="product.image" 
                :alt="product.name"
                class="product-card__img"
              >
              <span 
                v-if="product.badge" 
                class="product-card__badge"
              >
                {{ product.badge }}
              </span>
              <div class="product-card__actions">
                <BaseButton 
                  :variant="isInCart(product.id) ? 'in-cart' : 'primary'"
                  full 
                  @click="handleCartClick(product.id)"
                  class="product-card__btn"
                >
                  {{ isInCart(product.id) ? 'В корзине' : 'В корзину' }}
                </BaseButton>
              </div>
            </div>
            <div class="product-card__info">
              <div class="product-card__name">{{ product.name }}</div>
              <div class="product-card__price">
                {{ formatPrice(product.price) }} ₽
                <span 
                  v-if="product.oldPrice" 
                  class="product-card__price-old"
                >
                  {{ formatPrice(product.oldPrice) }} ₽
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="catalog__pagination pagination">
          <button class="pagination__btn pagination__btn--arrow">← Назад</button>
          <button class="pagination__btn pagination__btn--active">1</button>
          <button class="pagination__btn">2</button>
          <button class="pagination__btn">3</button>
          <button class="pagination__btn">4</button>
          <button class="pagination__btn">5</button>
          <button class="pagination__btn pagination__btn--arrow">Вперед →</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useProductsStore } from '@/stores/products.js'
  import { useCartStore } from '@/stores/cart.js'
  import { storeToRefs } from 'pinia'

  const productsStore = useProductsStore()
  const cartStore = useCartStore()
  const { items } = storeToRefs(cartStore)
  const sidebarOpen = ref(false)

  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
  }

  const products = productsStore.products
  const formatPrice = productsStore.formatPrice

  const categories = [
    { id: 1, name: 'Диваны', count: 12, checked: true },
    { id: 2, name: 'Кресла', count: 8 },
    { id: 3, name: 'Столы', count: 15 },
    { id: 4, name: 'Стулья', count: 20 },
    { id: 5, name: 'Освещение', count: 18 }
  ]

  const colors = [
    { id: 1, name: 'Коричневый', hex: '#8B4513', active: true },
    { id: 2, name: 'Бежевый', hex: '#D2B48C' },
    { id: 3, name: 'Серый', hex: '#2F4F4F' },
    { id: 4, name: 'Кремовый', hex: '#F5F5DC' },
    { id: 5, name: 'Черный', hex: '#1a1a1a' }
  ]

  const materials = [
    { id: 1, name: 'Дуб', count: 24 },
    { id: 2, name: 'Бук', count: 18 },
    { id: 3, name: 'Текстиль', count: 32 },
    { id: 4, name: 'Кожа', count: 12 }
  ]

  const isInCart = (productId) => {
    return items.value.some(item => item.id === productId)
  }

  const handleCartClick = (productId) => {
    if (!isInCart(productId)) {
      cartStore.addItem(productId)
    }
  }
</script>

<style scoped lang="scss">
  @use './Catalog.scss' as *;
</style>