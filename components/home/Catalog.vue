<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__wrapper-title">
        <h2 class="catalog__title">Каталог</h2>
        <NuxtLink class="catalog__link" to="/">Перейти в каталог</NuxtLink>
      </div>
      <div class="catalog__wrapper">
        <ul class="list-reset catalog__list">
          <li
            v-for="(item, index) in catalogList"
            :key="index"
            class="catalog__item"
          >
            <NuxtLink :to="`category/${item.documentId}`">
              <img class="catalog__img" :src="item.media" alt="img" />
              <h3 class="catalog__subtitle">{{ item.title }}</h3>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { CatalogDTO } from '~~/types/app'

defineProps<{
  catalogList: CatalogDTO[]
}>()
</script>

<style scoped lang="scss">
.catalog {
  padding: 53px 0 109px 0;
  &__wrapper-title {
    margin-bottom: 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__title {
    color: #000;
    font-family: 'Unbounded';
    font-size: 50px;
    font-style: normal;
    font-weight: 500;
    line-height: 58px; /* 116% */
    text-transform: uppercase;
  }
  &__link {
    padding: 19px 48px;
    background-color: #356697;
    color: #fff;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    border-radius: 7px;
    text-decoration: none;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 31px 50px 12px 50px;
    border-radius: 12px;
    border: 1px solid #8f8f8f;
    background: #f8f8f8;
  }
  &__subtitle {
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  &__img {
    margin-bottom: 15px;
    width: 100%;
    max-width: 150px;
    height: auto;
  }
}
</style>
