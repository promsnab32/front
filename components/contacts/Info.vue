<script lang="ts" setup>
const qrCodes = [
  {
    link: 'https://vk.com/promsnabb',
    img: 'vk',
    title: 'ВКонтакте',
  },
  {
    link: 'https://t.me/+79776404030',
    img: 'telegram',
    title: 'Telegram',
  },
  {
    link: 'https://api.whatsapp.com/send?phone=79776404030',
    img: 'whatsApp',
    title: 'WhatsApp',
  },
]
</script>

<template>
  <div class="info">
    <h1 class="info__title">контакты</h1>
    <p class="info__descr">
      Мы всегда рады услышать от вас! Если у вас есть вопросы, предложения или
      пожелания, пожалуйста, не стесняйтесь обращаться к нам. Наша команда
      готова помочь вам в любое время.
    </p>
    <div>
      <span class="info__descr">Способы связи: </span>
      <ul class="info__list">
        <li>
          Электронная почта: <a
            class="info__descr info__descr-link"
            href="mailto:zakaz@promms.ru"
            >zakaz@promms.ru</a
          >
        </li>
        <li>
          Телефон: <a
            href="tel:+79776404030"
            class="info__descr info__reset-link"
          >
            +7 (977) 640-40-30
          </a>
        </li>
        <li>
          Социальные сети:
          <a
            class="info__descr info__descr-link info__social"
            href="https://vk.com/promsnabb"
            target="_blank"
            rel="noopener noreferrer"
            >ВКонтакте,</a
          >
          <a
            class="info__descr info__descr-link info__social"
            href="https://t.me/+79776404030"
            target="_blank"
            rel="noopener noreferrer"
            >Telegram,</a
          >
          <a
            class="info__descr info__descr-link"
            href="https://api.whatsapp.com/send?phone=79776404030"
            target="_blank"
            rel="noopener noreferrer"
            >WhatsApp</a
          >
        </li>
      </ul>
    </div>

    <div class="info__wrapper-img">
      <div v-for="{ link, title, img } in qrCodes" :key="link">
        <a
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          style="text-decoration: none"
        >
          <img :src="`/img/${img}.png`" alt="" class="info__img" />
          <span class="info__img-decr">
            {{ title }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;

  &__title {
    color: #222;
    font-family: Unbounded;
    font-size: 50px;
    font-style: normal;
    font-weight: 500;
    line-height: 58px;
    text-transform: uppercase;
    @media screen and (max-width: 748px) {
      line-height: normal;
      font-size: 40px;
    }
    @media screen and (max-width: 636px) {
      font-size: 25px;
    }
  }

  &__descr {
    color: #000;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    &-link {
      text-decoration-line: underline;
      transition: color 0.3s ease-in-out;
      &:hover {
        color: #204d80;
      }
    }
    @media screen and (max-width: 652px) {
      font-size: 18px;
    }
  }

  &__social {
    margin-right: 5px;
  }
  &__reset-link {
    text-decoration-line: none;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #204d80;
    }
  }
  &__list {
    margin: 0;
    padding: 0;
    padding-left: 30px;
  }

  &__img {
    max-width: 150px;
    height: 100%;
    @media screen and (max-width: 1389px) {
      max-width: 100px;
    }
    @media screen and (max-width: 564px) {
      max-width: 200px;
      min-width: 200px;
    }
  }

  &__wrapper-img {
    width: 100%;
    display: flex;
    gap: 80px;
    align-items: center;
    @media screen and (max-width: 652px) {
      gap: 50px;
    }
    @media screen and (max-width: 564px) {
      flex-direction: column;
    }
  }

  &__img-decr {
    padding-top: 20px;
    color: #356697;
    font-family: 'Neue Machina';
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: block;
    text-align: center;
  }
}
</style>
