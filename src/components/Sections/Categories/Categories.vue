<template>
    <section class="categories container">
        <div class="categories__header">
            <h2 class="categories__title">Категории</h2>
            <button @click="goToCatalog" class="categories__btn">Все категории</button>
        </div>
        <div class="categories__grid">
            <div 
                v-for="category in categories" 
                :key="category.id"
                class="categories__card"
                @click="goToCatalog"
            >
                <img :src="category.image" :alt="category.name" class="categories__card-img">
                
                <div class="categories__overlay">
                    <h3 class="categories__overlay-title">{{ category.name }}</h3>
                </div>
                
                <div class="categories__arrow">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

    const categories = [
        { id: 1, name: 'Диваны', image: 'images/card/sofa.jpg' },
        { id: 2, name: 'Столы', image: 'images/card/table.jpg' },
        { id: 3, name: 'Освещение', image: 'images/card/chandelier.jpg' },
    ]

    const goToCatalog = () => {
        router.push('/catalog')
    }
</script>

<style scoped lang="scss">
    @use './Categories.scss' as *;
</style>