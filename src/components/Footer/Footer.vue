<template>
    <footer class="footer">
        <div class="footer__container container">
                <div class="footer__grid">
                    <div class="footer__info">
                        <AppLogo class="footer__logo" />
                        <p class="footer__info-desc">Скандинавская мебель ручной работы из натуральных материалов. Создаем пространства для жизни с 2015 года.</p>
                    </div>
                    <div class="footer__menu">
                        <span class="footer__title">МЕНЮ</span>
                        <NavMenu
                            variant="footer"
                        />
                    </div>
                    <div class="footer__contacts">
                        <span class="footer__title">Контакты</span>
                        <a class="footer__contacts-link" href="mailto:hello@nordicfurniture.ru">hello@nordicfurniture.ru</a>
                        <a class="footer__contacts-link" href="tel:+79991234567">+7 (999) 123-45-67</a>
                        <a class="footer__contacts-link" href="https://maps.app.goo.gl/BFhXzTJ8EVKLtKMX9">Санкт-Петербург, ул. Мебельная, 12</a>
                    </div>
                    <div class="footer__mailing">
                        <span class="footer__title">РАССЫЛКА</span>
                        <span class="footer__mailing-desc">Новинки, скидки и вдохновение</span>
                        <div class="footer__mailing-btn">
                            <BaseInput variant="dark" placeholder="Ваш email"/> 
                            <BaseButton variant="primary" size="mini" to="/catalog">
                                Подписаться
                            </BaseButton>
                        </div>
                    </div> 
                </div>
            <hr class="footer__hr" />
            <div class="footer__bottom">
                <div class="footer__copyright">&copy;  2026 Nordic Furniture. Все права защищены.</div>
                <div class="footer__bottom-links">
                    <a href="#" class="footer__bottom-link">Политика конфиденциальности</a>
                    <a href="#" class="footer__bottom-link">Оферта</a>
                </div>
            </div>          
        </div>
    </footer>
</template>

<style scoped lang="scss">
    @use './Footer.scss' as *

</style>

<script setup>

</script>

