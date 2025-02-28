<script lang="ts" setup>
import type { CatalogDTO } from '~/types/app'

defineProps<{
  item: CatalogDTO
}>()
</script>

<template>
  <div class="catalog__wrapper">
    <CommonItem
      :link="item.documentId"
      :title="item.title"
      :img="item.media ? item.media[0].url : '/img/no-image.png'"
      :isBold="true"
    />
    <ul class="list-reset catalog__list">
      <li v-for="bottomItem in item.categories">
        <NuxtLink
          class="catalog__list-link"
          :to="`products/${bottomItem.documentId}`"
        >
          <span class="catalog__list-item">• {{ bottomItem.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  &__list {
    padding: 24px 30px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  &__wrapper {
    height: 100%;
    border-radius: 12px;
    border: 1px solid #8f8f8f;

    background-color: #356397;
  }

  &__list-link {
    text-decoration: none;
    cursor: pointer;
  }

  &__list-item {
    color: #fff;
    font-family: 'Manrope';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #fb6415;
    }
    @media screen and (max-width: 786px) {
      font-size: 16px;
    }
  }
}
</style>
