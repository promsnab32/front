<script lang="ts" setup>
defineProps<{
  link: string
  title: string
  img?: string
}>()
</script>

<template>
  <div class="catalog__item">
    <NuxtLink :to="`category/${link}`" class="catalog__list-link">
      <img class="catalog__img" src="/svg/zapasnie-teplovozi.svg" alt="img" />
      <h3 class="catalog__subtitle">{{ title }}</h3>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  &__item {
    height: 242px;
    padding: 10px 10px 12px 10px;
    border-radius: 12px;
    border: 1px solid #8f8f8f;
    background: #f8f8f8;
  }

  &__img {
    margin-bottom: 15px;
    width: 100%;
    max-width: 150px;
    height: auto;
  }

  &__list-link {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }

  &__subtitle {
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
}
</style>
