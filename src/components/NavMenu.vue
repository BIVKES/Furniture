<template>
  <nav class="nav-menu" :class="`nav-menu--${variant}`">
    <RouterLink
      v-for="item in items"
      :key="item.to"
      :to="item.to"
      class="nav-menu__link"
      :class="{ 'nav-menu__link--active': route.path === item.to }"
    >
      {{ item.label }}
    </RouterLink>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const props = defineProps({
  variant: {
    type: String,
    default: 'horizontal'
  }
})

const route = useRoute()

const items = [
  { label: 'Каталог', to: '/catalog' },
  { label: 'О нас', to: '/about' },
  { label: 'Доставка', to: '/delivery' },
  { label: 'Контакты', to: '/contacts' }
]
</script>

<style scoped>
    .nav-menu {
        display: flex;
        gap: 32px;
    }

    .nav-menu--vertical,
    .nav-menu--footer {
        flex-direction: column;
        gap: 12px;
    }

    .nav-menu__link {
        font-size: 16px;
        font-weight: 500;
        color: var(--color-text);
        text-decoration: none;
        transition: all 0.2s ease;
        position: relative;
    }

    .nav-menu--horizontal .nav-menu__link {
        color: var(--color-surface);
        opacity: 0.8;
    }

    .nav-menu--horizontal .nav-menu__link:hover {
        opacity: 1;
    }

    .nav-menu--horizontal .nav-menu__link::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 1px;
        background: currentColor;
        transition: all 0.2s ease;
    }

    .nav-menu--horizontal .nav-menu__link:hover::after {
        width: 100%;
    }

    .nav-menu--footer .nav-menu__link {
        color: rgba(255, 255, 255, 0.8);
        font-size: 14px;
    }

    .nav-menu--footer .nav-menu__link:hover {
        color: var(--color-accent-hover);
    }
</style>