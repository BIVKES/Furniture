import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'  

export const useCartStore = defineStore('cart', () => {

  const savedItems = localStorage.getItem('cart')
  const items = ref(savedItems ? JSON.parse(savedItems) : [])

  watch(
    items,
    (newItems) => {
      localStorage.setItem('cart', JSON.stringify(newItems))
    },
    { deep: true }
  )

  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.qty, 0)
  })

  const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => sum + item.price * item.qty, 0)
  })

  const addItem = (product) => {
    const existing = items.value.find(i => i.id === product.id)
    if (existing) {
      existing.qty++
    } else {
      items.value.push({
        ...product,
        qty: 1,
        variant: product.variant || 'Стандарт'
      })
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