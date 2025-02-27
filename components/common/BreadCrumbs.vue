<script lang="ts" setup>
interface Crumb {
  title?: string | null
  documentId?: string | null
}

const props = defineProps<{
  crumbs?: Crumb[]
}>()
</script>

<template>
  <div class="breadcrumbs">
    <ul class="list-reset breadcrumbs__list">
      <li class="breadcrumbs__item">
        <NuxtLink to="/catalog" class="breadcrumbs__link">Каталог /</NuxtLink>
      </li>
      <li class="breadcrumbs__item" v-if="crumbs">
        <NuxtLink
          :to="`/category/${crumbs?.[0].documentId}`"
          class="breadcrumbs__link"
          >{{ crumbs?.[0].title }} {{ crumbs.length > 1 ? '/' : '' }}</NuxtLink
        >
      </li>
      <li
        class="breadcrumbs__item"
        v-if="crumbs && crumbs?.length >= 2 && crumbs?.[1].documentId !== null"
      >
        <NuxtLink
          :to="`/products/${crumbs?.[1].documentId}`"
          class="breadcrumbs__link"
          >{{ crumbs?.[1].title }} {{ crumbs.length > 2 ? '/' : '' }}</NuxtLink
        >
      </li>
      <li
        class="breadcrumbs__item"
        v-if="crumbs && crumbs?.length >= 3 && crumbs?.[2].documentId !== null"
      >
        <NuxtLink
          :to="`/product/${crumbs?.[1].documentId}`"
          class="breadcrumbs__link"
          >{{ crumbs?.[2].title }} {{ crumbs.length > 3 ? '/' : '' }}</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.breadcrumbs {
  &__list {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &__link {
    text-decoration: none;
    color: #222;
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
  }
}
</style>
