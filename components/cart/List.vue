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
          <span class="cart__item-title" style="width: 25px">{{
            item.count
          }}</span>

          <CommonCountButton :when-click="() => cartStore.updateCart(item, 1)"
            >+</CommonCountButton
          >
        </div>
      </li>
    </ul>
    <div class="cart__btn-send-wrapper">
      <button class="btn-reset cart__btn-send-mail">Оформить заявку</button>
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
  }

  &__list {
    margin-bottom: 60px;
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
  }

  &__item-title {
    color: #222;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
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
  }
  &__head {
    padding: 21px 150px 24px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 14px;
    border: 1px solid #8f8f8f;
    background: #f8f8f8;
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
