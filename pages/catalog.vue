<script lang="ts" setup>
import { useLoadData } from '#imports'
import type { CatalogDTO } from '~/types/app'

const catalogList = await useLoadData<'', CatalogDTO[]>(apiCatalog, {
  query: {
    populate: ['media', 'categories'],
  },
})
</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="section__title">Каталог</h1>
      <CatalogList :catalog-list="catalogList?.data || []" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section {
  &__title {
    margin-bottom: 40px;
    color: #000000;
    font-family: 'Unbounded';
    font-size: 50px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    @media screen and (max-width: 748px) {
      line-height: normal;
      font-size: 40px;
      margin-bottom: 20px;
    }
    @media screen and (max-width: 636px) {
      font-size: 25px;
    }
  }
}
</style>
