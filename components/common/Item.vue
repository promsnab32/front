<script lang="ts" setup>
defineProps<{
  link: string
  title: string
  img?: string
  isBold?: boolean
}>()
</script>

<template>
  <div class="catalog__item">
    <NuxtLink :to="`category/${link}`" class="catalog__list-link">
      <img class="catalog__img" :src="img" alt="img" />
      <h3 class="catalog__subtitle" :class="{ 'catalog__bold-title': isBold }">
        {{ title }}
      </h3>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.catalog {
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 242px;
    padding: 10px 10px 12px 10px;
    border-radius: 12px;
    border: 1px solid #8f8f8f;
    background: #f8f8f8;
  }

  &__img {
    margin-bottom: 25px;
    max-width: 220px;
    max-height: 220px;
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
    @media screen and (max-width: 786px) {
      font-size: 16px;
    }
  }
  &__bold-title {
    font-weight: 600;
  }
}
</style>
