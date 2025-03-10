<template>
  <section class="catalog">
    <HeaderNavigation class="catalog__navigation" />
    <div class="catalog__search">
      <HeaderSearch />
    </div>
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
            <CommonItem
              :link="topItem.documentId"
              :title="topItem.title"
              :img="topItem.media ? topItem.media[0].url : '/img/no-image.png'"
            />
          </li>
        </ul>
      </div>
      <div class="catalog__link-mobile-wrapper">
        <NuxtLink class="catalog__link-mobile" to="/catalog"
          >Перейти в каталог</NuxtLink
        >
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
  padding: 20px 0 20px 0;
  @media screen and (max-width: 786px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 636px) {
    padding: 0 0 20px 0;
  }
  &__search {
    display: none;
    @media screen and (max-width: 1100px) {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }
    @media screen and (max-width: 636px) {
      background-color: #082246;
    }
  }
  &__wrapper-title {
    margin-bottom: 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 636px) {
      padding: 20px 0 0 0;
    }
  }
  &__title {
    color: #000;
    font-family: 'Unbounded';
    font-size: 50px;
    font-style: normal;
    font-weight: 500;
    line-height: 58px; /* 116% */
    text-transform: uppercase;
    @media screen and (max-width: 786px) {
      font-size: 40px;
    }
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
    transition: background-color 0.3s ease, color 0.3s ease;
    &:hover {
      background-color: #1f4d7b;
    }
    @media screen and (max-width: 786px) {
      display: none;
    }
  }
  &__link-mobile {
    display: none;
    @media screen and (max-width: 786px) {
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
      display: block;
      font-size: 16px;
      text-align: center;
      max-width: 277px;
      min-height: 55px;
    }
  }
  &__link-mobile-wrapper {
    display: flex;
    justify-content: center;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
    @media screen and (max-width: 1372px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 988px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 786px) {
      margin-bottom: 10px;
    }
    @media screen and (max-width: 648px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  &__navigation {
    display: none;
    @media screen and (max-width: 636px) {
      display: block;
    }
  }
}
</style>
