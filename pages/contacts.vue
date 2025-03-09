<script lang="ts" setup>
import { ContactsMap } from '#components'
</script>

<template>
  <div class="container">
    <div class="contacts">
      <div class="contacts__wrapper-info">
        <ContactsInfo />
      </div>
      <div class="contacts__wrapper-map">
        <ContactsMap />
      </div>
    </div>
    <h2 class="contacts__bottom-text">
      Спасибо, что выбрали нас! Мы ценим ваше мнение и готовы сделать все
      возможное, чтобы улучшить наш сервис.
    </h2>
  </div>
</template>

<style scoped lang="scss">
.contacts {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 50px;
  row-gap: 39px;
  padding: 30px 0 50px 0;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
  @media screen and (max-width: 900px) {
    padding: 30px 0 37px 0;
  }
  &__bottom-text {
    padding-bottom: 50px;
    color: #222;
    text-align: center;
    font-family: Unbounded;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 45px;
    text-transform: uppercase;
    @media screen and (max-width: 652px) {
      font-size: 16px;
      line-height: 25px;
    }
    @media screen and (max-width: 470px) {
      text-align: left;
    }
  }

  &__wrapper-map {
    width: 100%;
    border-radius: 25px;
    border: 1px solid #8f8f8f;
    overflow: hidden;
  }
  &__wrapper-info {
    width: 100%;
  }
}
</style>
