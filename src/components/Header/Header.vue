<template>
    <header class="header" :class="{ 'header--scrolled': scrolled }">
        <div class="container header__inner">
            <AppLogo />

            <NavMenu variant="horizontal" class="header__nav" />

            <div class="header__actions">
                <button 
                    class="header__menu-toggle" 
                    @click="toggleMenu"
                    aria-label="Меню"
                >
                    <svg class="icon" viewBox="0 0 24 24">
                        <path v-if="!menuOpen" d="M3 12h18M3 6h18M3 18h18"/>
                        <path v-else d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </button>

                <button class="header__icon" aria-label="Поиск">
                    <svg class="icon" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                    </svg>
                </button>

                <RouterLink to="/cart" class="header__icon" aria-label="Корзина">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M6 6h15l-1.5 9h-12z"/>
                        <circle cx="9" cy="20" r="1.5" fill="currentColor" stroke="none"/>
                        <circle cx="18" cy="20" r="1.5" fill="currentColor" stroke="none"/>
                        <path d="M6 6 5 3H2"/>
                    </svg>
                    <span v-if="totalItems > 0" class="header__cart-badge">{{ totalItems }}</span>
                </RouterLink>
            </div>
        </div>

        <div class="header__mobile-nav" :class="{ 'is-open': menuOpen }">
            <RouterLink to="/" class="header__mobile-link" @click="closeMenu">Главная</RouterLink>
            <RouterLink to="/catalog" class="header__mobile-link" @click="closeMenu">Каталог</RouterLink>
            <RouterLink to="/about" class="header__mobile-link" @click="closeMenu">О нас</RouterLink>
            <RouterLink to="/contacts" class="header__mobile-link" @click="closeMenu">Контакты</RouterLink>
        </div>
    </header>
</template>

<style scoped lang="scss">
    @use './Header.scss' as *;
</style>    

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'
    import { useCartStore } from '@/stores/cart.js'
    import { storeToRefs } from 'pinia'

    const cartStore = useCartStore()
    const { totalItems } = storeToRefs(cartStore)

     Scroll
    const scrolled = ref(false)
    const onScroll = () => {
        scrolled.value = window.scrollY > 50
    }
    onMounted(() => window.addEventListener('scroll', onScroll))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))

    const menuOpen = ref(false)
    const toggleMenu = () => {
        menuOpen.value = !menuOpen.value
    }
    const closeMenu = () => {
        menuOpen.value = false
    }
</script>