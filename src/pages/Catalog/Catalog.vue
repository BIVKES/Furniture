<!-- src/pages/Catalog/Catalog.vue -->
<template>
  <div class="catalog">
    <!-- Breadcrumbs -->
    <div class="catalog__breadcrumbs container">
      <RouterLink to="/" class="catalog__breadcrumbs-link">Главная</RouterLink>
      <span class="catalog__breadcrumbs-separator">/</span>
      <span class="catalog__breadcrumbs-current">Каталог</span>
    </div>

    <!-- Header -->
    <div class="catalog__header container">
      <h1 class="catalog__title">Каталог</h1>
    </div>

    <div class="catalog__layout container">
      <!-- Mobile Sidebar Toggle -->
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
      <!-- Sidebar -->
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

      <!-- Content -->
      <div class="catalog__content">
        <div class="catalog__top">
          <div class="catalog__results">Показано 9 из 73 товаров</div>
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
            @click="goToProduct(product.id)"
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
                  variant="primary" 
                  full 
                  @click.stop="addToCart(product)"
                  class="product-card__btn"
                >
                  В корзину
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

const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
import { useRouter } from 'vue-router'

const router = useRouter()

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

const products = [
  {
    id: 1,
    name: 'Кресло Bergen',
    price: 45000,
    image: '/images/armchair.jpg',
    badge: 'Новинка'
  },
  {
    id: 2,
    name: 'Диван Oslo',
    price: 127000,
    image: '/images/sofa.jpg'
  },
  {
    id: 3,
    name: 'Стол Stockholm',
    price: 38000,
    oldPrice: 52000,
    image: '/images/table.jpg',
    badge: 'Скидка'
  },
  {
    id: 4,
    name: 'Светильник Nordic',
    price: 18500,
    image: '/images/chandelier.jpg'
  },
  {
    id: 5,
    name: 'Кресло Aarhus',
    price: 52000,
    image: '/images/Aarhus.jpg'
  },
  {
    id: 6,
    name: 'Стол Copenhagen',
    price: 67000,
    image: '/images/Copenhagen.jpg',
    badge: 'Новинка'
  },
  {
    id: 7,
    name: 'Диван Malmö',
    price: 145000,
    image: '/images/Malmo.jpeg'
  },
  {
    id: 8,
    name: 'Торшер Helsinki',
    price: 24000,
    oldPrice: 32000,
    image: '/images/Helsinki.jpg',
    badge: 'Скидка'
  },
  {
    id: 9,
    name: 'Кресло Lund',
    price: 41000,
    image: '/images/Lund.jpg'
  }
]

const formatPrice = (price) => {
  return price.toLocaleString('ru-RU')
}

const goToProduct = (id) => {
  router.push(`/product/${id}`)
}

const addToCart = (product) => {
  console.log('В корзину:', product.name)
}
</script>


<style scoped lang="scss" >
     @use './Catalog.scss' as *;
</style>