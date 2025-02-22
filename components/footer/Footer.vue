<script lang="ts" setup></script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <div class="footer__info">
          <img class="footer__logo" src="/img/logo-footer.png" alt="logo" />
          <p class="footer__descr">
            Преимуществом компании является собственная производственная база,
            находящаяся на территории Российской Федерации
          </p>
          <div class="footer__links">
            <a class="footer__link" href="tel:+79776404030"
              >+7 (977) 640-40-30</a
            >
            <a class="footer__link" href="mailto:zakaz@promms.ru"
              >zakaz@promms.ru</a
            >
          </div>
        </div>
        <div class="footer__content">
          <div class="footer__policy">
            <NuxtLink class="footer__policy-link" href="/"
              >Политика конфидициеальности</NuxtLink
            >
          </div>
          <nav class="footer__nav">
            <ul
              v-for="(category, index) in footerNav"
              :key="index"
              class="list-reset footer__items"
            >
              <li class="footer__title">{{ category.title }}</li>
              <li
                v-for="(link, linkIndex) in category.links"
                :key="linkIndex"
                class="footer__link-items"
              >
                <a class="footer__link-item" :href="link.link">{{
                  link.name
                }}</a>
              </li>
            </ul>
          </nav>
          <div class="footer__links-mobile">
            <a class="footer__link-mobile" href="tel:+79776404030"
              >+7 (977) 640-40-30</a
            >
            <a class="footer__link-mobile" href="mailto:zakaz@promms.ru"
              >zakaz@promms.ru</a
            >
            <p class="footer__link-mobile">Москва ул. Речников 17 корп.1</p>
          </div>
        </div>
      </div>
      <span class="footer__copyright"
        >©2021-2024 ООО «ПРОМСНАБ» все права защищены</span
      >
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 50px 0 24px 0;
  background: #d4d4d4;
  width: 100%;
  &__wrapper {
    margin-bottom: 35px;
    display: grid;
    grid-template-columns: 30% 70%;
    @media screen and (max-width: 1334px) {
      grid-template-columns: 1fr;
    }
  }
  &__descr {
    margin-bottom: 22px;
    max-width: 400px;
    color: #222;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    @media screen and (max-width: 1334px) {
      font-size: 14px;
    }
    @media screen and (max-width: 444px) {
      text-align: right;
    }
  }
  &__logo {
    margin-bottom: 25px;
    @media screen and (max-width: 444px) {
      width: 90px;
      height: auto;
    }
  }
  &__links,
  &__address {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1334px) {
      display: none;
    }
  }
  &__link {
    width: max-content;
    text-decoration: none;
    color: #222;
    font-family: 'Manrope';
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  &__content {
    display: flex;
    gap: 110px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1334px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
  }
  &__nav {
    display: flex;
    gap: 110px;
    @media screen and (max-width: 786px) {
      flex-direction: column;
      gap: 20px;
    }
  }
  &__policy-link {
    color: #000;
    font-family: 'Manrope';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    text-decoration: none;
  }
  &__title {
    margin-bottom: 20px;
    color: #000;
    font-family: 'Manrope';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
  }
  &__link-items {
    margin-bottom: 7px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__link-item {
    color: #000;
    font-family: 'Manrope';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    text-decoration: none;
  }
  &__copyright {
    display: block;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
  }
  &__info {
    @media screen and (max-width: 1334px) {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;
    }
  }
  &__links-mobile {
    display: none;
    @media screen and (max-width: 1334px) {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  &__link-mobile {
    color: #222;
    font-family: 'Manrope';
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    text-decoration: none;
  }
}
</style>
