<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink to="/" style="text-decoration: none; cursor: pointer">
          <picture>
            <source srcset="/img/logo-footer.png" media="(max-width: 688px)" />
            <img class="header__logo" src="/img/logo.png" alt="logo" />
          </picture>
        </NuxtLink>
        <span class="header__dash"></span>
        <HeaderSearch class="header__search" />
        <span class="header__dash-2"></span>
        <div class="header__contacts">
          <div class="header__links">
            <div class="header__link-wrapper">
              <ul class="list-reset header__link-list">
                <li class="header__link-item">
                  <img
                    class="header__img-link"
                    src="/img/tel.png"
                    alt="phone"
                  />
                  <a class="header__link" href="tel:+79776404030"
                    >+7 (977) 640-40-30</a
                  >
                </li>
                <li class="header__link-item">
                  <img
                    class="header__img-link"
                    src="/img/mail.png"
                    alt="mail"
                  />
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
                    src="/img/cart-header1.png"
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
      // justify-content: center;
      gap: 10px;
    }
    @media screen and (max-width: 1100px) {
      justify-content: center;
    }
  }
  &__link-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    @media screen and (max-width: 1478px) {
      justify-content: center;
    }
    @media screen and (max-width: 688px) {
      justify-content: flex-end;
    }
  }
  &__img-cart {
    width: 60px;
    height: 60px;
    object-fit: cover;
    @media screen and (max-width: 1478px) {
      width: 45px;
      height: 45px;
    }
    @media screen and (max-width: 688px) {
      width: 35px;
      height: 35px;
    }
    @media screen and (max-width: 442px) {
      width: 30px;
      height: 30px;
    }
  }
  &__dash {
    display: block;
    width: 1px;
    height: 180px;
    background-color: #8f8f8f;
    @media screen and (max-width: 688px) {
      height: 95px;
    }
  }
  &__dash-2 {
    display: block;
    width: 1px;
    height: 180px;
    background-color: #8f8f8f;
    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
  &__dash-3 {
    display: none;
    @media screen and (max-width: 1100px) {
      display: block;
      width: 1px;
      height: 180px;
      background-color: #8f8f8f;
    }
    @media screen and (max-width: 688px) {
      height: 95px;
    }
  }
  &__link-icons-wrapper {
    display: flex;
    gap: 24px;
    @media screen and (max-width: 1478px) {
      gap: 15px;
    }
    @media screen and (max-width: 688px) {
      gap: 10px;
    }
    // @media screen and (max-width: 370px) {
    //   flex-direction: column;
    // }
  }
  &__logo {
    width: 220px;
    height: auto;
    @media screen and (max-width: 1478px) {
      width: 200px;
    }
    @media screen and (max-width: 688px) {
      width: 134px;
    }
    @media screen and (max-width: 442px) {
      width: 104px;
    }
    @media screen and (max-width: 396px) {
      width: 80px;
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
    width: 63%;
    z-index: 3;
  }
  &__search {
    @media screen and (max-width: 1100px) {
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
    gap: 30px;
    padding-top: 20px;
    @media screen and (max-width: 1478px) {
      gap: 18px;
    }
    @media screen and (max-width: 1326px) {
      justify-content: center;
      gap: 10px;
      padding-top: 0px;
    }
  }
  &__link-list-2 {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 5px;
    @media screen and (max-width: 1478px) {
      gap: 18px;
      padding-top: 0px;
    }
    @media screen and (max-width: 1326px) {
      padding-top: 0px;
      gap: 7px;
    }
    @media screen and (max-width: 1100px) {
      padding-top: 38px;
    }
    @media screen and (max-width: 688px) {
      padding-top: 19px;
    }
    // @media screen and (max-width: 370px) {
    //   order: 2;
    // }
  }
  &__link-list {
    display: flex;
    flex-direction: column;
    gap: 1px;
    @media screen and (max-width: 1478px) {
      gap: 15px;
    }
    @media screen and (max-width: 1326px) {
      gap: 4px;
    }
  }
  &__link-item {
    display: flex;
    align-items: center;
    gap: 15px;
    @media screen and (max-width: 492px) {
      gap: 6px;
    }
  }
  &__img {
    width: 43px;
    height: 43px;
    @media screen and (max-width: 1478px) {
      width: 33px;
      height: 33px;
    }
    @media screen and (max-width: 688px) {
      width: 19px;
      height: 19px;
    }
    // @media screen and (max-width: 432px) {
    //   width: 20px;
    //   height: 20px;
    // }
  }
  &__img-link {
    width: 37px;
    height: 37px;
    @media screen and (max-width: 1478px) {
      width: 30px;
      height: 30px;
    }
    @media screen and (max-width: 688px) {
      width: 20px;
      height: 20px;
    }
    @media screen and (max-width: 442px) {
      width: 15px;
      height: 15px;
    }
  }
  &__link {
    color: #222;
    font-family: 'Manrope';
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #204d80;
    }
    @media screen and (max-width: 1478px) {
      font-size: 20px;
    }
    @media screen and (max-width: 688px) {
      font-size: 14px;
    }
    @media screen and (max-width: 367px) {
      font-size: 12px;
    }
  }
  &__btn {
    color: #222;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    text-decoration: underline;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #204d80;
    }
    @media screen and (max-width: 1478px) {
      font-size: 16px;
    }
    @media screen and (max-width: 688px) {
      font-size: 12px;
    }
  }
  &__cart-wrapper {
    position: relative;
    display: flex;
    padding-top: 24px;
    @media screen and (max-width: 1326px) {
      padding-top: 12px;
    }
    @media screen and (max-width: 1100px) {
      padding-top: 52px;
    }
    @media screen and (max-width: 688px) {
      padding-top: 24px;
    }
    // @media screen and (max-width: 432px) {
    //   order: 1;
    // }
  }
  &__cart-active {
    position: absolute;
    top: 15px;
    right: -5px;
    font-size: 12px;
    font-weight: 600;
    font-family: 'Manrope';
    color: #fff;
    background: red;
    border-radius: 50%;
    padding: 2px 8px;
    opacity: 0.9;
    @media screen and (max-width: 1478px) {
      padding: 1px 7px;
      top: 12px;
    }
    @media screen and (max-width: 1326px) {
      font-size: 10px;
      padding: 0px 5px;
      top: 50px;
    }
    @media screen and (max-width: 688px) {
      padding: 1px 5px;
      top: 19px;
    }
    @media screen and (max-width: 442px) {
      font-size: 8px;
    }
  }
}
</style>
