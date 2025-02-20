<script lang="ts" setup>
import type { CatalogDTO } from '~/types/app'
defineProps<{
  catalogList: CatalogDTO[]
}>()
</script>

<template>
  <div>
    <ul class="list-reset catalog">
      <li v-for="item in catalogList" :key="item.documentId">
        <CatalogItem :item="item" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  li {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    .catalogItem {
      width: 100%;
      height: 100%;
      transition: transform 0.3s ease;
    }
  }
}
</style>
