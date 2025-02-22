<template>
  <section class="hero">
    <div class="container">
      <h1 class="hero__title">О компании</h1>
      <p class="hero__description">
        Компания «ПРОМ СНАБ» — ведущий игрок в сфере производства и комплексных
        поставок запчастей, комплектующих для промышленности, спецтехники и
        железнодорожного транспорта.
      </p>
      <p class="hero__description">
        С момента своего основания мы зарекомендовали себя как надежный партнёр
        для компаний, предлагая высококачественные решения, отвечающие самым
        строгим стандартам безопасности и эффективности. Наш ассортимент
        включает в себя широкий спектр продуктов: от запчастей для подвижного
        состава и спецтехники до рельсов, шпал, специальных соединений. Мы
        используем передовые технологии и инновационные материалы, что позволяет
        нам создавать продукцию отличающуюся высокой прочностью и долговечностью
      </p>
      <p class="hero__description">
        Наша команда постоянно работает над улучшением производственных
        процессов и внедрением новых технологий для оптимизации работы с
        клиентами.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero {
  padding: 30px 0 67px 0;
  &__title {
    margin-bottom: 24px;
    color: #222;
    font-family: 'Unbounded';
    font-size: 50px;
    font-style: normal;
    font-weight: 500;
    line-height: 58px; /* 116% */
    text-transform: uppercase;
    @media screen and (max-width: 748px) {
      line-height: normal;
      font-size: 40px;
    }
    @media screen and (max-width: 636px) {
      font-size: 25px;
    }
  }
  &__description {
    margin-bottom: 20px;
    color: #222;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px; /* 105% */
    &:last-child {
      margin-bottom: 0;
    }
    @media screen and (max-width: 636px) {
      font-size: 25px;
    }
  }
}
</style>
