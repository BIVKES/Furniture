<script setup>
    import Hero from '@/components/Sections/Hero/Hero.vue'
    import Categories from '@/components/Sections/Categories/Categories.vue'
    import Bestsellers from '@/components/Sections/Bestsellers/Bestsellers.vue'
    import About from '@/components/Sections/About/About.vue'
    import InstagramFeed from '@/components/Sections/InstagramFeed/InstagramFeed.vue'
</script>

<template>
    <div class="home">
         <Hero /> 
         <Categories />
         <Bestsellers />
         <About />
         <InstagramFeed />
    </div>
</template>

<style lang="scss" scoped>
    @use './Home.scss' as *;
</style>