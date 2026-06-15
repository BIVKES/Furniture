<template>
    <section class="about">
        <div class="about__container container">
            <div class="about__info">
                <h2 class="about__info-title">Мы создаем мебель, которая живет десятилетия</h2>
                <p class="about__info-desc">Каждое изделие рождается в нашей мастерской из тщательно отобранных материалов. Мы верим, что настоящая красота — в простоте форм и честности материалов.</p>
                <BaseButton  @click="goToAbout" variant="secondary" size="mini">
                    Наша история
                </BaseButton>
            </div>
            <img src="/images/about.jpg" alt="about" class="about__img">
        </div>
    </section>
</template>

<style scoped lang="scss">
    @use './About.scss' as *;
</style>


<script setup>
    import {useRouter} from 'vue-router'

    const router = useRouter()

    const goToAbout = () => {
        router.push('/about')
    }
</script>