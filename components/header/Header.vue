<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink to="/" style="text-decoration: none; cursor: pointer">
          <img class="header__logo" src="/img/logo.png" alt="logo" />
        </NuxtLink>
        <span class="header__dash"></span>
        <HeaderSearch />
        <span class="header__dash"></span>
        <div class="header__contacts">
          <div class="header__links">
            <ul class="list-reset header__link-list">
              <li class="header__link-item">
                <img class="header__img" src="/img/tel.png" alt="phone" />
                <a class="header__link" href="tel:+79776404030"
                  >+7 (977) 640-40-30</a
                >
              </li>
              <li class="header__link-item">
                <img class="header__img" src="/img/mail.png" alt="mail" />
                <a class="header__link" href="mailto:zakaz@promms.ru"
                  >zakaz@promms.ru</a
                >
              </li>
            </ul>
            <div class="header__link-icons-wrapper">
              <div class="header__link-list">
                <a
                  class="header__link"
                  href="https://t.me/+79776404030"
                  target="_blank"
                  ><img
                    class="header__img"
                    src="/img/telegram.png"
                    alt="telegram"
                /></a>
                <a
                  class="header__link"
                  href="https://api.whatsapp.com/send?phone=79776404030"
                  target="_blank"
                  ><img
                    class="header__img"
                    src="/img/whatsapp.png"
                    alt="whatsapp"
                /></a>
              </div>
              <div class="header__cart-wrapper">
                <NuxtLink
                  to="/cart"
                  style="text-decoration: none; cursor: pointer"
                >
                  <img
                    class="header__img-cart"
                    src="/img/cart-header.png"
                    alt="vk"
                  />
                  <span
                    class="header__cart-count"
                    :class="{ 'header__cart-active': cartCount }"
                    >{{ cartCount ? cartCount : '' }}</span
                  >
                </NuxtLink>
              </div>
            </div>
          </div>
          <button class="btn-reset header__btn">Заказать звонок</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const cartStore = useCartStore()
const cartCount = computed(() => cartStore.cartList.length)
</script>

<style scoped lang="scss">
.header {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__img-cart {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
  &__dash {
    display: inline-block;
    width: 1px;
    height: 165px;
    background-color: #8f8f8f;
  }

  &__link-icons-wrapper {
    display: flex;
    gap: 24px;
    align-items: center;
  }
  &__logo {
    width: 200px;
    height: auto;
  }

  &__search-input {
    border-radius: 7px;
    border: 1px solid #8f8f8f;
    background: #fff;
    font-family: 'Manrope';
    color: black;
    font-size: 15px;
    font-weight: 700;
    padding: 25px 0 25px 10px;
    max-height: 30px;
    outline: none;
    width: 73%;
    z-index: 3;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__links {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  &__link-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__link-item {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  &__img {
    width: 30px;
    height: 30px;
  }
  &__link {
    color: #222;
    font-family: 'Manrope';
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  &__btn {
    color: #222;
    font-family: 'Manrope';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    text-decoration: underline;
  }
  &__cart-wrapper {
    position: relative;
  }
  &__cart-active {
    position: absolute;
    top: -19px;
    right: 0;
    font-size: 12px;
    font-weight: 600;
    font-family: 'Manrope';
    color: #fff;
    background: red;
    border-radius: 50%;
    padding: 0 7px;
    opacity: 0.9;
  }
}
</style>
