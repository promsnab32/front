<script lang="ts" setup>
import type { CatalogDTO } from '~/types/app'
defineProps<{
  catalogList: CatalogDTO[]
}>()
</script>

<template>
  <div class="catalog">
    <ul class="list-reset catalog__items">
      <li v-for="item in catalogList" :key="item.documentId">
        <CatalogItem :item="item" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  &__items {
    display: grid;
    align-items: stretch;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media screen and (max-width: 1442px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 1174px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 742px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  li {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      @media screen and (max-width: 500px) {
        transform: none;
      }
    }

    .catalogItem {
      width: 100%;
      height: 100%;
      transition: transform 0.3s ease;
    }
  }
}
</style>
