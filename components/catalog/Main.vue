<script lang="ts" setup>
import type { ProductDTO } from '~/types/app'
const props = defineProps<{
  listCatalog: ProductDTO[]
}>()

watch(
  () => props.listCatalog,
  (newValue) => {
    console.log(newValue)
  }
)
</script>

<template>
  <CatalogTable :catalogsList="props.listCatalog" />
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
