<script lang="ts" setup>
import { ContactsMap } from '#components'
</script>

<template>
  <div class="container">
    <div class="contacts">
      <ContactsInfo />
      <div class="contacts__wrapper-map">
        <ClientOnly>
          <ContactsMap />
        </ClientOnly>
      </div>

      <h2 class="contacts__bottom-text">
        Спасибо, что выбрали нас! Мы ценим ваше мнение и готовы сделать все
        возможное, чтобы улучшить наш сервис.
      </h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contacts {
  padding-top: 50px;
  padding-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  column-gap: 109px;
  row-gap: 39px;

  &__bottom-text {
    grid-column: 1/3;
    color: #222;
    text-align: center;
    text-align: center;
    font-family: Unbounded;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 45px;
    text-transform: uppercase;
  }

  &__wrapper-map {
    grid-column: 2/3;
    width: max-content;
    border-radius: 25px;
    border: 1px solid #8f8f8f;
    overflow: hidden;
  }
}
</style>
