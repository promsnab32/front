<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <NuxtLink to="/" style="text-decoration: none; cursor: pointer">
          <img class="header__logo" src="/img/logo.png" alt="logo" />
        </NuxtLink>
        <span class="header__dash"></span>
        <div class="header__search">
          <input
            class="header__search-input"
            type="text"
            placeholder="Поиск по сайту"
          />
          <button class="header__search-btn">Поиск</button>
        </div>
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
                <a class="header__link" href="#"
                  ><img
                    class="header__img"
                    src="/img/telegram.png"
                    alt="telegram"
                /></a>
                <a class="header__link" href="#"
                  ><img
                    class="header__img"
                    src="/img/whatsapp.png"
                    alt="whatsapp"
                /></a>
              </div>
              <div>
                <NuxtLink
                  to="/cart"
                  style="text-decoration: none; cursor: pointer"
                >
                  <img class="header__img-cart" src="/img/cart.png" alt="vk" />
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

<script lang="ts" setup></script>

<style scoped lang="scss">
.header {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__img-cart {
    width: 70px;
    height: 70px;
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
  &__search {
    position: relative;
    width: 100%;
    max-width: 650px;
    z-index: 1;
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

  &__search-btn {
    z-index: -1;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 15px 71px;
    color: #fff;
    font-size: 14px;
    font-family: 'Manrope';
    font-weight: 500;
    background-color: #356697;
    border-radius: 7px;
    border: 1px solid #8f8f8f;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: #2d4f76;
    }

    &:focus {
      outline: none;
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
}
</style>
