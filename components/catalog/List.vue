<script lang="ts" setup>
import type { CatalogDTO } from '~/types/app'
defineProps<{
  catalogList: CatalogDTO[]
}>()
</script>

<template>
  <div>
    <ul class="list-reset catalog">
      <li v-for="(item, index) in catalogList" :key="item.documentId">
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
}
</style>
