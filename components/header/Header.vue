<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
     <img class="header__logo" src="/img/logo.png" alt="logo">
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
            <img class="header__img" src="/img/tel.png" alt="phone">
            <a class="header__link" href="tel:+79776404030">+7 (977) 640-40-30</a>
          </li>
          <li class="header__link-item">
            <img class="header__img" src="/img/mail.png" alt="mail">
            <a class="header__link" href="mailto:zakaz@promms.ru">zakaz@promms.ru</a>
          </li>
        </ul>
        <div class="header__link-list">
          <a class="header__link" href="#"><img class="header__img" src="/img/telegram.png" alt="telegram"></a>
          <a class="header__link" href="#"><img class="header__img" src="/img/whatsapp.png" alt="whatsapp"></a>
        </div>
      </div>
      <button class="btn-reset header__btn">Заказать звонок</button>
      </div>
    </div>
    </div>
  </header>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.header {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__dash {
    display: inline-block;
    width: 1px;
    height: 165px;
    background-color: #8F8F8F;
  }
  &__logo {
    width: 200px;
    height: auto;
  }
  &__search-input {
    border-radius: 7px;
border: 1px solid #8F8F8F;
background: #FFF;
font-family: 'Manrope';
    color: black;
    font-size: 15px;
    font-weight: 700;
    padding: 20px 0 20px 10px;
    min-width: 550px;
    max-height: 30px;
  }
  &__search-btn {
    padding: 10px 70px;
    color: #FFF;
    font-size: 15px;
font-style: normal;
font-family: 'Manrope';
font-weight: 500;
text-transform: capitalize;
background-color: #356697;
border-radius: 7px;

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
    gap:10px;
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