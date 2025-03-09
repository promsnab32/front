<script lang="ts" setup>
const cartStore = useCartStore()
</script>

<template>
  <div class="cart">
    <div class="cart__head">
      <span class="cart__head-text">Наименование</span>
      <span class="cart__head-text">Количество</span>
    </div>
    <ul class="list-reset cart__list">
      <li
        v-for="(item, index) in cartStore.cartList"
        :key="index"
        class="cart__item"
      >
        <span class="cart__item-title">
          {{ item.name }}
        </span>
        <div class="cart__item-count">
          <CommonCountButton :when-click="() => cartStore.updateCart(item, -1)"
            >-</CommonCountButton
          >
          <span
            class="cart__item-title"
            style="width: 25px; text-align: center"
            >{{ item.count }}</span
          >

          <CommonCountButton :when-click="() => cartStore.updateCart(item, 1)"
            >+</CommonCountButton
          >
        </div>
      </li>
    </ul>
    <div class="cart__btn-send-wrapper">
      <NuxtLink to="/feedback" class="cart__btn-send-mail"
        >Оформить заявку</NuxtLink
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  &__btn-send-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  &__item-count {
    display: flex;
    align-items: center;
    gap: 37px;
    flex-shrink: 0;
    @media screen and (max-width: 1046px) {
      gap: 5px;
    }
  }

  &__list {
    margin-bottom: 60px;
    @media screen and (max-width: 1046px) {
      margin-bottom: 20px;
    }
  }

  &__btn-send-mail {
    border-radius: 10px;
    background: #fb6415;
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    padding: 20px 150px;
    text-decoration: none;
    @media screen and (max-width: 1046px) {
      width: 100%;
      text-align: center;
      font-size: 18px;
      padding: 15px 50px;
    }
  }

  &__item-title {
    color: #222;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    @media screen and (max-width: 1046px) {
      font-size: 20px;
      line-height: 30px;
    }
    @media screen and (max-width: 1046px) {
      font-size: 18px;
    }
  }

  &__item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    padding-right: 53px;

    &:not(:last-child)::after {
      content: '';
      width: 100%;
      height: 1px;
      background: #8f8f8f;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    @media screen and (max-width: 1200px) {
      border-radius: 14px;
      border: 1px solid #8f8f8f;
      background: #f8f8f8;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
      &:not(:last-child)::after {
        display: none;
      }
    }
    @media screen and (max-width: 1046px) {
      flex-direction: column;
      gap: 20px;
      align-items: flex-start;
    }
    @media screen and (max-width: 480px) {
      padding: 20px 23px;
      padding-right: 23px;
    }
  }
  &__head {
    padding: 21px 150px 24px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 14px;
    border: 1px solid #8f8f8f;
    background: #f8f8f8;
    @media screen and (max-width: 1200px) {
      margin-bottom: 20px;
    }
    @media screen and (max-width: 1046px) {
      display: none;
    }
  }

  &__head-text {
    display: block;
    color: #222;
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
  }
}
</style>
