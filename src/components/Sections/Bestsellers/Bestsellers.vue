<template>
    <section class="bestsellers">
        <div class="bestsellers__container container">
            <div class="bestsellers__header">
                <h2 class="bestsellers__title">Бестселлеры</h2>
                <button @click="goToCatalog" class="bestsellers__btn">Все товары</button>
            </div>

            <div class="bestsellers__grid">
                <div 
                    v-for="product in products" 
                    :key="product.id"
                    class="product-card"
                >
                    <div class="product-image-wrap">
                        <img :src="product.image" :alt="product.name">
                        
                        <span v-if="product.badge" class="product-badge">
                            {{ product.badge }}
                        </span>
                        
                        <div class="product-actions">
                            <BaseButton variant="primary" size="mini" @click="addToCart(product)">
                                В корзину
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
    import { useRouter } from 'vue-router'
    import { useCartStore } from '@/stores/cart.js'

    const router = useRouter()
    const cartStore = useCartStore()

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
        }
    ] 
        
    const formatPrice = (price) => {
        if (!price) return ''
        return price.toLocaleString('ru-RU')
    }

    const addToCart = (product) => {
        cartStore.addItem(product)
    }
</script>