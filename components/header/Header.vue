<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink to="/" style="text-decoration: none; cursor: pointer">
          <img class="header__logo" src="/img/logo.png" alt="logo" />
        </NuxtLink>
        <span class="header__dash"></span>
        <HeaderSearch class="header__search" />
        <span class="header__dash-2"></span>
        <div class="header__contacts">
          <div class="header__links">
            <div class="header__link-wrapper">
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
              <NuxtLink href="/feedback" class="header__btn"
                >Заказать звонок</NuxtLink
              >
            </div>
            <span class="header__dash-3"></span>
            <div class="header__link-icons-wrapper">
              <div class="header__link-list-2">
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
    @media screen and (max-width: 1326px) {
      justify-content: center;
      gap: 10px;
    }
  }
  &__link-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
  &__img-cart {
    width: 50px;
    height: 50px;
    object-fit: cover;
    @media screen and (max-width: 688px) {
      width: 35px;
      height: 35px;
    }
  }
  &__dash {
    display: inline-block;
    width: 1px;
    height: 165px;
    background-color: #8f8f8f;
  }
  &__dash-2 {
    display: block;
    width: 1px;
    height: 165px;
    background-color: #8f8f8f;
    @media screen and (max-width: 1326px) {
      display: none;
    }
  }
  &__dash-3 {
    display: none;
    @media screen and (max-width: 1326px) {
      display: block;
      width: 1px;
      height: 165px;
      background-color: #8f8f8f;
    }
  }
  &__link-icons-wrapper {
    display: flex;
    gap: 24px;
    align-items: center;
    @media screen and (max-width: 688px) {
      gap: 10px;
    }
    @media screen and (max-width: 370px) {
      flex-direction: column;
    }
  }
  &__logo {
    width: 200px;
    height: auto;
    @media screen and (max-width: 538px) {
      width: 100px;
    }
    @media screen and (max-width: 432px) {
      width: 90px;
    }
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
  &__search {
    @media screen and (max-width: 1326px) {
      display: none;
    }
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
    @media screen and (max-width: 1326px) {
      justify-content: center;
      gap: 10px;
    }
  }
  &__link-list-2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media screen and (max-width: 370px) {
      order: 2;
    }
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
    @media screen and (max-width: 432px) {
      gap: 5px;
    }
  }
  &__img {
    width: 30px;
    height: 30px;
    @media screen and (max-width: 688px) {
      width: 20px;
      height: 20px;
    }
    @media screen and (max-width: 432px) {
      width: 20px;
      height: 20px;
    }
  }
  &__link {
    color: #222;
    font-family: 'Manrope';
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    @media screen and (max-width: 688px) {
      font-size: 12px;
    }
  }
  &__btn {
    color: #222;
    font-family: 'Manrope';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    text-decoration: underline;
    @media screen and (max-width: 688px) {
      font-size: 14px;
    }
  }
  &__cart-wrapper {
    position: relative;
    @media screen and (max-width: 432px) {
      order: 1;
    }
  }
  &__cart-active {
    position: absolute;
    top: -10px;
    right: -5px;
    font-size: 12px;
    font-weight: 600;
    font-family: 'Manrope';
    color: #fff;
    background: red;
    border-radius: 50%;
    padding: 0 7px;
    opacity: 0.9;
    @media screen and (max-width: 688px) {
      font-size: 10px;
      padding: 0 5px;
    }
  }
}
</style>
