<<template>
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
          <div class="catalog__results">
            Показано {{ paginatedProducts.length }} из {{ products.length }} товаров
          </div>
          <select class="catalog__sort sort">
            <option class="sort__option">По популярности</option>
            <option class="sort__option">Сначала дешевле</option>
            <option class="sort__option">Сначала дороже</option>
            <option class="sort__option">По новизне</option>
          </select>
        </div>

        <div class="catalog__products products">
          <div 
            v-for="product in paginatedProducts" 
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
                  variant="primary" 
                  full 
                  @click="addToCart(product)"
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
          <button 
            class="pagination__btn pagination__btn--arrow"
            :disabled="currentPage === 1"
            @click="currentPage--"
          >
            ← Назад
          </button>
          
          <button 
            v-for="page in totalPages" 
            :key="page"
            class="pagination__btn"
            :class="{ 'pagination__btn--active': page === currentPage }"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
          
          <button 
            class="pagination__btn pagination__btn--arrow"
            :disabled="currentPage === totalPages"
            @click="currentPage++"
          >
            Вперед →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart.js'

const router = useRouter()
const cartStore = useCartStore()
const sidebarOpen = ref(false)
const currentPage = ref(1)
const itemsPerPage = 9

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

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
    image: 'images/card/armchair.jpg',
    badge: 'Новинка'
  },
  {
    id: 2,
    name: 'Диван Oslo',
    price: 127000,
    image: 'images/card/sofa.jpg'
  },
  {
    id: 3,
    name: 'Стол Stockholm',
    price: 38000,
    oldPrice: 52000,
    image: 'images/card/table.jpg',
    badge: 'Скидка'
  },
  {
    id: 4,
    name: 'Светильник Nordic',
    price: 18500,
    image: 'images/card/chandelier.jpg'
  },
  {
    id: 5,
    name: 'Кресло Aarhus',
    price: 52000,
    image: 'images/card/Aarhus.jpg'
  },
  {
    id: 6,
    name: 'Стол Copenhagen',
    price: 67000,
    image: 'images/card/Copenhagen.jpg',
    badge: 'Новинка'
  },
  {
    id: 7,
    name: 'Диван Malmö',
    price: 145000,
    image: 'images/card/Malmo.jpeg'
  },
  {
    id: 8,
    name: 'Торшер Helsinki',
    price: 24000,
    oldPrice: 32000,
    image: 'images/card/Helsinki.jpg',
    badge: 'Скидка'
  },
  {
    id: 9,
    name: 'Стул Lund',
    price: 41000,
    image: 'images/card/Lund.jpg'
  },
  {
    id: 10,
    name: 'Кресло Arden',
    price: 35000,
    image: 'images/card/Arden.jpg'
  },
  {
    id: 11,
    name: 'Стул Arden Armchair',
    price: 31000,
    oldPrice: 35000,
    image: 'images/card/ArdenArmchair.jpg',
    badge: 'Скидка'
  },
  {
    id: 12,
    name: 'Кресло Atelier Chair',
    price: 27000,
    image: 'images/card/AtelierUpholsteredChair.jpg'
  },
  {
    id: 13,
    name: 'Светильник Aurora Light',
    price: 25000,
    image: 'images/card/AuroraPendantLight.jpg'
  },
  {
    id: 14,
    name: 'Диван Coastal',
    price: 45000,
    image: 'images/card/CoastalBreezeSofa.jpg',
    badge: 'Новинка'
  },
  {
    id: 15,
    name: 'Кресло Beckett',
    price: 36000,
    image: 'images/card/BeckettDiningChair.jpg'
  },
  {
    id: 16,
    name: 'Светильник Ember',
    price: 26000,
    image: 'images/card/EmberWallSconce.jpg'
  },
  {
    id: 17,
    name: 'Светильник Halo',
    price: 19000,
    oldPrice: 23000,
    image: 'images/card/HaloTableLamp.jpg',
    badge: 'Скидка'
  },
  {
    id: 18,
    name: 'Кресло Hudson',
    price: 34000,
    image: 'images/card/HudsonRecliner.jpg',
    badge: 'Новинка'
  },
  {
    id: 19,
    name: 'Кресло Rowan',
    price: 41000,
    image: 'images/card/RowanSideChair.jpg'
  },
  {
    id: 20,
    name: 'Светильник LumenArc',
    price: 23000,
    image: 'images/card/LumenArcFloorLamp.jpg',
    badge: 'Новинка'
  },
  {
    id: 21,
    name: 'Кресло Scout',
    price: 25000,
    image: 'images/card/ScoutClubChair.jpg'
  },
  {
    id: 22,
    name: 'Стол Meridian',
    price: 42000,
    image: 'images/card/MeridianConsoleTable.jpg',
    badge: 'Новинка'
  },
  {
    id: 23,
    name: 'Диван Midtown',
    price: 46000,
    image: 'images/card/MidtownSectional.jpg'
  },
  {
    id: 24,
    name: 'Напольная лампа Nimbus',
    price: 27000,
    oldPrice: 31000,
    image: 'images/card/NimbusChandelier.jpg',
    badge: 'Скидка'
  },
  {
    id: 25,
    name: 'Диван Velvet',
    price: 61000,
    image: 'images/card/VelvetHavenSofa.jpg'
  },
  {
    id: 26,
    name: 'Стол Oakview',
    price: 43000,
    image: 'images/card/OakviewDiningTable.jpg'
  },
  {
    id: 27,
    name: 'Стул Piper',
    price: 26000,
    image: 'images/card/PiperBarStool.jpg',
    badge: 'Новинка'
  },
]

const totalPages = computed(() => Math.ceil(products.length / itemsPerPage))

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return products.slice(start, end)
})

const formatPrice = (price) => {
  return price.toLocaleString('ru-RU')
}

const goToProduct = (id) => {
  router.push(`/product/${id}`)
}

const addToCart = (product) => {
  cartStore.addItem(product)
}
</script>

<style scoped lang="scss">
@use './Catalog.scss' as *;
</style>