<script lang="ts" setup>
import { useLoadData } from '#imports'
import type { CatalogDTO } from '~/types/app'
import { apiCatalog } from '~~/utils/apiUrls'
const route = useRoute()
const id = route.params.id as string

const data = await useLoadData<CatalogDTO>(`${apiCatalog}/${id}`)

const categoryItem = computed(() => data.value?.categories)
</script>

<template>
  <section class="section">
    <div class="container">
      <ul>
        <li v-for="item in categoryItem">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
