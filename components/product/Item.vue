<template>
  <div class="container">
    <div class="product">
      <h2 class="product__title">{{ product.title }}</h2>
      <div class="product__wrapper">
        <div class="product__content">
          <h3 class="product__property">Характеристики</h3>
          <span class="product__article">Артикул — {{ product.article }}</span>

          <div class="product__cart">
            <span
              class="product__value-text"
              :class="
                product.has ? 'product__value-success' : 'product__value-danger'
              "
            >
              {{ product.has ? 'В наличии' : 'Нет в наличии' }}
            </span>
            <ProductCountButton
              :count="product.count"
              :title="product.title"
              :article="product.article"
              :id="product.documentId"
            />
          </div>
        </div>
        <div class="product__img-wrapper">
          <img
            class="product__img"
            :src="product.media[0].url"
            :alt="product.title"
          />
          <span class="product__acticle-img">{{ product.article }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ProductCountButton } from '#components'

defineProps<{ product: any }>()
</script>

<style lang="scss" scoped>
.product {
  padding: 37px 0 50px 0;
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
  &__content {
    display: flex;
    flex-direction: column;
  }
  &__cart {
    margin-top: auto;
  }
  &__title {
    margin-bottom: 26px;
    color: #222;
    font-family: 'Manrope';
    font-size: 50px;
    font-style: normal;
    font-weight: 500;
    line-height: 58px; /* 116% */
    text-transform: uppercase;
  }
  &__property {
    margin-bottom: 20px;
    color: #000;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 200% */
  }
  &__article {
    color: #000;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 200% */
  }
  &__img-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 10px 12px 10px;
    border-radius: 12px;
    border: 1px solid #8f8f8f;
  }
  &__img {
    width: 100%;
    max-width: 450px;
    height: auto;
  }
  &__acticle-img {
    position: absolute;
    bottom: 20px;
    left: 15px;
    padding: 10px 35px;
    color: #fff;
    font-family: 'Manrope';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; /* 414.286% */
    border-radius: 11px;
    background: #356697;
  }
  &__cart {
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 500px;
    padding: 30px;
    border-radius: 12px;
    border: 1px solid #8f8f8f;
    background: #f0f2f6;
  }
  &__value-text {
    color: #222;
    font-family: 'Manrope';
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
  }
  &__value {
    margin-bottom: 20px;
    font-family: 'Manrope';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    &-success {
      color: #17ae0f;
    }
    &-danger {
      color: #f41515;
    }
  }
}
</style>
