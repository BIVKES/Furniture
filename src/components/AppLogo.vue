<template>
    <RouterLink to="/" class="logo">
        NORDIC
    </RouterLink>
</template>

<script setup>
    defineProps({
        light: { type: Boolean, default: false }
    })
</script>

<style scoped>
    .logo {
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.05em;
        color: var(--color-text);
        transition: var(--transition);
    }    
</style>