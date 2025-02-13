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
      <NuxtLink to="/" class="hero__link">Перейти в каталог</NuxtLink>
    </div>
    <img src="/img/hero-2.png" alt="Train" class="hero__train-image" />
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
  &__nav-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__nav {
    padding: 25px 15px;
    border-bottom: 1px solid #8f8f8f;
  }
  &__nav-link {
    color: #fff;
    text-align: center;
    font-family: 'Manrope';
    font-size: 18px;
    font-weight: 800;
    text-transform: uppercase;
    text-decoration: none;
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
  }
  &__content-2 {
    margin-bottom: 66px;
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
  }
  &__subtitle {
    color: #fff;
    font-family: 'Unbounded';
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 58px;
    text-transform: uppercase;
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
  }
  &__train-image {
    position: absolute;
    right: 0;
    bottom: 0;
    width: auto;
    height: 550px;
  }
}
</style>
