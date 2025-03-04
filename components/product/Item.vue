<template>
  <div>
    <div class="product" v-if="product">
      <h2 class="product__title">{{ product.title }}</h2>
      <div class="product__wrapper">
        <div class="product__content">
          <h3 class="product__property">Характеристики</h3>
          <span class="product__article">Артикул — {{ product.article }}</span>
          <div v-if="product.description" class="product__description-wrapper">
            <span class="product__property">Описание:</span>
            <p class="product__description">{{ product.description }}</p>
          </div>
          <div class="product__cart-3">
            <div class="product__cart">
              <span
                class="product__value-text"
                :class="{
                  'product__value-text': true,
                  available: product.availability === 'В наличии',
                  unavailable: product.availability === 'Нет в наличии',
                  'pre-order':
                    product.availability !== 'В наличии' &&
                    product.availability !== 'Нет в наличии',
                }"
              >
                {{ product.availability }}
              </span>
              <ProductCountButton
                :count="product.count"
                :title="product.title"
                :article="product.article"
                :id="product.documentId"
              />
            </div>
          </div>
        </div>
        <div class="product__img-wrapper">
          <img
            v-if="product.media?.[0]?.url"
            class="product__img"
            :src="product.media[0].url"
            :alt="product.title"
          />
          <img
            v-else
            class="product__img"
            src="/img/no-image.png"
            alt="Нет изображения"
          />
          <span class="product__acticle-img">{{ product.article }}</span>
        </div>
        <div class="product__cart-2">
          <span
            class="product__value-text"
            :class="{
              'product__value-text': true,
              available: product.availability === 'В наличии',
              unavailable: product.availability === 'Нет в наличии',
              'pre-order':
                product.availability !== 'В наличии' &&
                product.availability !== 'Нет в наличии',
            }"
          >
            {{ product.availability }}
          </span>
          <ProductCountButton
            :count="product.count"
            :title="product.title"
            :article="product.article"
            :id="product.documentId"
          />
        </div>
      </div>
    </div>
    <div v-else>Информация по товара не найдена</div>
  </div>
</template>

<script lang="ts" setup>
import { ProductCountButton } from '#components'
import type { ProductDTO } from '~/types/app'
defineProps<{ product: ProductDTO | null }>()
</script>

<style lang="scss" scoped>
.product {
  padding: 37px 0 50px 0;
  @media screen and (max-width: 664px) {
    padding: 17px 0 50px 0;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 58% 40%;
    gap: 2%;
    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
    }
  }
  &__cart {
    margin-top: auto;
  }
  &__title {
    margin-bottom: 26px;
    color: #222;
    font-family: 'Manrope';
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px;
    text-transform: uppercase;
    text-wrap: inherit;
    @media screen and (max-width: 872px) {
      font-size: 30px;
      line-height: 35px;
      font-weight: 700;
    }
    @media screen and (max-width: 696px) {
      font-size: 25px;
      line-height: 25px;
    }
    @media screen and (max-width: 460px) {
      font-size: 20px;
    }
    @media screen and (max-width: 370px) {
      font-size: 18px;
    }
  }
  &__property {
    margin-bottom: 10px;
    color: #000;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 200% */
    @media screen and (max-width: 1200px) {
      margin-bottom: 0px;
      line-height: normal; /* 200% */
    }
  }
  &__description-wrapper {
    margin-bottom: 50px;
    width: 100%;
    max-width: 750px;
    @media screen and (max-width: 1200px) {
      margin-bottom: 20px;
    }
  }
  &__description {
    color: #222;
    font-family: 'Manrope';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
  }
  &__article {
    margin-bottom: 20px;
    color: #000;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px; /* 200% */
    @media screen and (max-width: 1200px) {
      margin-bottom: 0;
    }
  }
  &__img-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 10px 32px 10px;
    border-radius: 12px;
    border: 1px solid #8f8f8f;
    @media screen and (max-width: 1200px) {
      max-width: 700px;
    }
  }
  &__img {
    width: 100%;
    max-width: 450px;
    height: auto;
    @media screen and (max-width: 1200px) {
      max-width: 450px;
    }
    @media screen and (max-width: 1200px) {
      max-width: 350px;
    }
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
    @media screen and (max-width: 500px) {
      font-size: 12px;
      padding: 7px 20px;
      bottom: 10px;
    }
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
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
  &__cart-3 {
    display: flex;
    justify-content: flex-end;
  }
  &__cart-2 {
    display: none;
    flex-direction: column;
    gap: 30px;
    max-width: 500px;
    padding: 30px;
    border-radius: 12px;
    border: 1px solid #8f8f8f;
    background: #f0f2f6;
    @media screen and (max-width: 1200px) {
      max-width: 700px;
      display: flex;
      gap: 20px;
    }
    @media screen and (max-width: 500px) {
      gap: 10px;
      padding: 10px;
    }
  }
  &__value-text {
    color: #222;
    font-family: 'Manrope';
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    @media screen and (max-width: 1200px) {
      margin-bottom: 10px;
      font-size: 20px;
    }
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

.available {
  color: green;
}

.unavailable {
  color: red;
}

.pre-order {
  color: rgb(0, 0, 0);
}
</style>
