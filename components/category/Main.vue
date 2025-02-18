<script lang="ts" setup>
import type { CategoryDTO } from '~/types/app'
defineProps<{
  categoryItem: CategoryDTO
}>()
</script>

<template>
  <CategoryTable :productList="categoryItem.products" />
</template>

<style lang="scss" scoped>
.category {
  &__title {
    color: #222;
    font-family: Unbounded;
    font-size: 50px;
    font-style: normal;
    font-weight: 500;
    line-height: 58px; /* 116% */
    text-transform: uppercase;
  }
}
</style>
