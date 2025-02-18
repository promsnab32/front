<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__wrapper-title">
        <h2 class="catalog__title">Каталог</h2>
        <NuxtLink class="catalog__link" to="/catalog"
          >Перейти в каталог</NuxtLink
        >
      </div>
      <div class="catalog__wrapper">
        <ul class="list-reset catalog__list">
          <li v-for="(topItem, index) in catalogList" :key="index">
            <CommonItem :link="topItem.documentId" :title="topItem.title" />
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
}
</style>
