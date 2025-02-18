<script lang="ts" setup>
const cartStore = useCartStore()
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="cart__title-wrapper">
        <h1 class="title">Корзина</h1>
        <div
          class="cart__info-subtitle-wrapper"
          v-if="cartStore.cartList.length"
        >
          <span class="cart__info-subtitle">
            в корзине {{ cartStore.cartList.length }} товара</span
          >
          <button
            @click="cartStore.removeAll()"
            class="btn-reset cart__info-subtitle cart__info-subtitle-btn"
          >
            Очистить корзину
          </button>
        </div>
      </div>
      <div class="cart__empty" v-if="!cartStore.cartList.length">
        <h1 class="">В корзине пока пусто</h1>
      </div>
      <CartList v-else />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cart {
  &__info-subtitle-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 100%;
    color: #222;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 58px; /* 116% */
  }

  &__info-subtitle-img {
    object-fit: cover;
  }
  &__title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 22px;
  }

  &__info-subtitle {
    display: inline-block;
    border-radius: 14px;
    border: 1px solid #2963aa;
    background: #f8f8f8;
    padding: 20px 25px 20px 25px;
    color: #222;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;

    &-btn {
      position: relative;

      padding: 20px 25px 20px 50px;
      border: 1px solid #e21111;

      &::before {
        content: '';
        position: absolute;
        width: 34px;
        height: 34px;
        top: 12px;
        left: 13px;
        background-image: url('/svg/remove-cart.svg');
      }
    }
  }
}
</style>
