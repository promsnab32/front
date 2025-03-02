<template>
  <section class="hero">
    <div class="container">
      <nav class="hero__nav">
        <ul class="list-reset hero__nav-list">
          <li
            v-for="(item, index) in items"
            :key="index"
            class="hero__nav-item"
          >
            <NuxtLink
              v-if="item.type === 'link'"
              class="hero__nav-link"
              :to="item.link"
              >{{ item.title }}</NuxtLink
            >
            <span v-else class="hero__dash"></span>
          </li>
        </ul>
      </nav>
      <div class="hero__content">
        <h1 class="hero__title">
          запчасти для железнодорожного промышленного транспорта
        </h1>
        <div class="hero__content-wrapper">
          <h2 class="hero__subtitle">группа компаний</h2>
          <h3 class="hero__subtitle-2">пром снаб</h3>
        </div>
      </div>
      <div class="hero__content-2">
        <ul class="hero__list">
          <li
            v-for="(item, index) in heroItems"
            :key="index"
            class="hero__list-item"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <div class="hero__link-wrapper">
        <NuxtLink to="/catalog" class="hero__link">Перейти в каталог</NuxtLink>
      </div>
    </div>
    <picture>
      <source srcset="/img/hero-mobile.png" media="(max-width: 1032px)" />
      <img src="/img/hero-2.png" alt="Train" class="hero__train-image" />
    </picture>
  </section>
</template>

<script lang="ts" setup>
const items = navList

const heroItems = [
  {
    title: 'Дизельные двигатели и запчасти к ним',
  },
  {
    title: 'Электрооборудование, генераторы и другое',
  },
  {
    title: 'Топливные и тормозные системы',
  },
  {
    title: ' Запчасти для гидропередачи и фильтры',
  },
  {
    title: 'Прокладки, манжеты кольца и другие РТИ',
  },
  {
    title: 'Материалы верхнего строения пути ВСП',
  },
]
</script>

<style lang="scss" scoped>
.hero {
  overflow: hidden;
  position: relative;
  background: linear-gradient(
      0deg,
      rgba(10, 37, 82, 0.69) 0%,
      rgba(10, 37, 82, 0.69) 100%
    ),
    url('/img/hero.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  z-index: 1;
  @media screen and (max-width: 1287px) {
    min-height: 105vh;
  }
  @media screen and (max-width: 786px) {
    min-height: 70vh;
  }
  @media screen and (max-width: 636px) {
    min-height: 65vh;
  }
  &__nav-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__nav {
    position: relative;
    padding: 25px 15px;
    border-bottom: 1px solid #8f8f8f;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -50%; /* Выход за пределы контейнера */
      right: -50%; /* Выход за пределы контейнера */
      bottom: 0;
      background-image: url('/img/hero.png');
      background-size: cover;
      filter: blur(1px);
      z-index: -1;
      width: 200%; /* Увеличиваем ширину, чтобы псевдоэлемент выходил за пределы */
    }
    @media screen and (max-width: 636px) {
      display: none;
    }
  }
  &__nav-link {
    color: #fff;
    text-align: center;
    font-family: 'Manrope';
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.3s ease;
    &:hover {
      color: #fb6415;
    }
    @media screen and (max-width: 1287px) {
      font-size: 14px;
    }
  }
  &__dash {
    display: inline-block;
    width: 1px;
    height: 20px;
    background: #fff;
  }
  &__content {
    padding-top: 50px;
    margin-bottom: 66px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 1287px) {
      flex-direction: column;
      margin-bottom: 26px;
    }
    @media screen and (max-width: 786px) {
      margin-bottom: 240px;
    }
    @media screen and (max-width: 636px) {
      padding-top: 30px;
      margin-bottom: 210px;
    }
  }
  &__content-2 {
    margin-bottom: 66px;
    @media screen and (max-width: 1287px) {
      margin-bottom: 46px;
    }
    @media screen and (max-width: 786px) {
      display: none;
    }
  }
  &__content-wrapper {
    display: flex;
    flex-direction: column;
  }
  &__title {
    max-width: 800px;
    color: #fff;
    font-family: 'Unbounded';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 58px;
    text-transform: uppercase;
    @media screen and (max-width: 1457px) {
      font-size: 40px;
      max-width: 600px;
    }
    @media screen and (max-width: 1287px) {
      order: 1;
    }
    @media screen and (max-width: 786px) {
      font-size: 20px;
      line-height: normal;
    }
    @media screen and (max-width: 636px) {
      font-size: 15px;
      max-width: 250px;
    }
  }
  &__subtitle {
    color: #fff;
    font-family: 'Unbounded';
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 58px;
    text-transform: uppercase;
    @media screen and (max-width: 1287px) {
      text-align: right;
      line-height: normal;
    }
    @media screen and (max-width: 786px) {
      font-size: 21px;
    }
  }
  &__subtitle-2 {
    color: #fff;
    text-align: right;
    font-family: 'Unbounded';
    font-size: 90px;
    font-style: normal;
    font-weight: 700;
    line-height: 100px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-decoration: underline #fff 2px;
    text-underline-offset: 7px;
    @media screen and (max-width: 1613px) {
      font-size: 70px;
    }
    @media screen and (max-width: 1287px) {
      margin-bottom: 15px;
      text-align: right;
      line-height: normal;
    }
    @media screen and (max-width: 786px) {
      line-height: 65px; /* 92.857% */
      margin-bottom: 30px;
      text-decoration: none;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-left: 30px;
  }
  &__list-item {
    color: #fff;
    font-family: 'Manrope';
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 35px;
    @media screen and (max-width: 1613px) {
      font-size: 20px;
    }
  }
  &__link {
    padding: 17px 55px;
    color: #fff;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 21px;
    text-transform: uppercase;
    background-color: #fb6415;
    border-radius: 7px;
    text-decoration: none;
    transition: background-color 0.3s ease, color 0.3s ease;
    &:hover {
      background-color: #fff;
      color: #fb6415;
    }
    @media screen and (max-width: 636px) {
      padding: 13px 30px;
      font-size: 16px;
      z-index: 9999;
    }
  }
  &__train-image {
    position: absolute;
    right: 0;
    bottom: 0;
    width: auto;
    height: 550px;
    @media screen and (max-width: 1756px) {
      height: 450px;
    }
    @media screen and (max-width: 1349px) {
      height: 350px;
    }
    @media screen and (max-width: 1168px) {
      height: 280px;
    }
    @media screen and (max-width: 636px) {
      height: 320px;
      z-index: -1;
    }
  }
  &__link-wrapper {
    @media screen and (max-width: 636px) {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
