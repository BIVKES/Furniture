import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useProductsStore } from './products.js'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])  

  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.qty, 0)
  })

  const totalPrice = computed(() => {
    const productsStore = useProductsStore()
    return items.value.reduce((sum, item) => {
      const product = productsStore.getById(item.id)
      return sum + (product ? product.price * item.qty : 0)
    }, 0)
  })

  const addItem = (productId) => {
    const existing = items.value.find(i => i.id === productId)
    if (existing) {
      existing.qty++
    } else {
      items.value.push({ id: productId, qty: 1 })
    }
  }

  const removeItem = (id) => {
    items.value = items.value.filter(i => i.id !== id)
  }

  const updateQty = (id, qty) => {
    const item = items.value.find(i => i.id === id)
    if (item) {
      item.qty = qty
      if (item.qty <= 0) removeItem(id)
    }
  }

  const increaseQty = (id) => {
    const item = items.value.find(i => i.id === id)
    if (item) item.qty++
  }

  const decreaseQty = (id) => {
    const item = items.value.find(i => i.id === id)
    if (item && item.qty > 1) {
      item.qty--
    } else {
      removeItem(id)
    }
  }

  return {
    items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQty,
    increaseQty,
    decreaseQty
  }
})