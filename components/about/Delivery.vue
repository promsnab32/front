<template>
  <section class="delivery">
    <div class="container">
      <div class="delivery__wrapper">
        <div class="delivery__content">
          <h2 class="delivery__title">Доставка</h2>
          <p class="delivery__description">
            Отгрузка осуществляется любой транспортной компанией по желанию
            Заказчика
          </p>
          <p class="delivery__description">
            Наши логисты всегда придут на помощь:
          </p>
          <ul class="delivery__list">
            <li
              v-for="(item, index) in items"
              :key="index"
              class="delivery__item"
            >
              {{ item.title }}
            </li>
          </ul>
          <p class="delivery__description">
            По желанию Покупателя расходы на доставку возможно включить в
            стоимость груза, обозначить в счете отдельной строкой или
            предоставить самостоятельно оплачивать услуги перевозчика.
          </p>
          <p class="delivery__description">
            * Информация на сайте, не является публичной офертой. Актуальные
            цены, наличие на складе и сроки поставки Вы можете уточнить у наших
            менеджеров.
          </p>
        </div>
        <div class="delivery__img-wrapper">
          <div class="delivery__contact">
            <div class="delivery__contact-wrapper">
              <h2 class="delivery__title-2">
                Оставьте заявку и мы свяжемся с Вами в ближайшее время
              </h2>
              <Form
                :validation-schema="validationSchema"
                id="form"
                class="delivery__form"
                @submit="handleSubmit"
              >
                <Field
                  class="delivery__input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Имя Фамилия"
                />
                <ErrorMessage
                  name="name"
                  v-if="!formSubmitted"
                  class="delivery__error"
                />
                <Field
                  class="delivery__input"
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="+7 (___) ___-__-__"
                />
                <ErrorMessage
                  name="phone"
                  v-if="!formSubmitted"
                  class="delivery__error"
                />
                <Field
                  class="delivery__input"
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  v-if="!formSubmitted"
                  class="delivery__error"
                />
                <button class="delivery__btn">Оставить заявку</button>
              </Form>
              <a href="/doc/policy.pdf" target="_blank" class="delivery__policy"
                >Нажимая на кнопку вы даёте согласие на обработку персональных
                данных в соответствии с Политикой конфиденциальности</a
              >
              <p v-if="submitTrue" class="delivery__submiteTrue">
                Спасибо, что выбрали нас! В течении 15 минут с Вами свяжется
                менеджер по Вашей заявке.
              </p>
              <div v-if="loading" class="delivery__loading">Loading&#8230;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
const loading = ref(false)
const submitTrue = ref(false)
const formSubmitted = ref(false)
const items = [
  {
    title: 'посоветуют наименее затратный способ перевозки',
  },
  {
    title: 'рассчитают кратчайшие пути и сроки ',
  },
  {
    title: 'найдут попутный транспорт при необходимости ',
  },
  {
    title: 'отследят местонахождение груза',
  },
]
const validationSchema = useValidation(['name', 'phone', 'email'])
const sendToForm = useFormSender()

const buttonLoad = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    submitTrue.value = true
  }, 2000)
  setTimeout(() => {
    submitTrue.value = false
  }, 6000)
}
const handleSubmit = async (
  values: any,
  { resetForm }: { resetForm: () => void }
) => {
  try {
    await sendToForm({ ...values })
    buttonLoad()
  } catch (error) {
    console.error('Ошибка при отправке формы:', error)
  } finally {
    resetForm()
  }
}
</script>

<style scoped lang="scss">
.delivery {
  position: relative;
  padding: 77px 0;
  background: #356697;
  @media screen and (max-width: 900px) {
    padding: 27px 0;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 1200px) {
      grid-template-columns: 1fr;
      max-width: 100%;
      width: 100%;
    }
  }
  &__content {
    max-width: 750px;
    @media screen and (max-width: 1200px) {
      margin-bottom: 40px;
      max-width: 100%;
    }
  }
  &__img-wrapper {
    @media screen and (max-width: 1200px) {
      max-width: 100%;
      width: 100%;
      min-height: 600px;
    }
  }
  &__title {
    margin-bottom: 27px;
    color: #fff;
    font-family: 'Unbounded';
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
  &__description {
    margin-bottom: 15px;
    color: #fff;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    &:nth-last-child(2) {
      margin-bottom: 30px;
    }
    &:last-child {
      margin-bottom: 0;
    }
    @media screen and (max-width: 900px) {
      font-size: 18px;
      margin-bottom: 10px;
      width: 100%;
      &:nth-last-child(2) {
        margin-bottom: 20px;
      }
    }
  }
  &__item {
    color: #fff;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    @media screen and (max-width: 900px) {
      font-size: 18px;
    }
  }
  &__list {
    margin-bottom: 15px;
    padding-left: 26px;
    ::marker {
      color: #ffffff;
    }
  }
  &__submiteTrue {
    padding: 20px 0;
    color: #488a46;
    font-size: 12px;
    font-weight: 700;
    line-height: 21px;
  }
  &__contact {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: url('/img/about-contact.png');
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    z-index: 1;
    @media screen and (max-width: 1200px) {
      max-width: 100%;
      width: 100%;
      max-height: 600px;
      bottom: 0;
      top: auto;
      background-position: center;
      z-index: 9999999999999999;
    }
  }
  &__contact-wrapper {
    padding: 20px 50px;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    max-width: 546px;
    min-height: 501px;
    border-radius: 12px;
    border: 1px solid #8f8f8f;
    background: #f0f2f6;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
    @media screen and (max-width: 900px) {
      padding: 20px 20px;
      max-width: 500px;
    }
    @media screen and (max-width: 566px) {
      max-width: 350px;
    }
    @media screen and (max-width: 410px) {
      max-width: 350px;
    }
    @media screen and (max-width: 370px) {
      max-width: 320px;
    }
  }
  &__title-2 {
    margin-bottom: 25px;
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
  }
  &__form {
    display: flex;
    flex-direction: column;
  }
  &__input {
    padding: 19px 32px;
    margin-bottom: 15px;
    border-radius: 10px;
    color: #8f8f8f;
    background: #fff;
    outline: none;
    &:last-child {
      margin-bottom: 0;
    }
    &::placeholder {
      color: #8f8f8f;
      font-family: 'Manrope';
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 21px;
    }
    @media screen and (max-width: 748px) {
      padding: 12px 21px;
      &::placeholder {
        font-size: 18px;
      }
    }
  }
  &__policy {
    position: relative;
    color: #8f8f8f;
    font-family: 'Manrope';
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
    transition: color 0.3s ease-in-out;
    text-decoration: none;
    &:hover {
      color: #fb6415;
    }
  }
  &__btn {
    margin-bottom: 17px;
    padding: 15px;
    width: 100%;
    color: #fff;
    font-family: 'Manrope';
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    border-radius: 10px;
    background: #fb6415;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    &:hover {
      background-color: #fff;
      color: #fb6415;
    }
    @media screen and (max-width: 748px) {
      padding: 15px;
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
  &__error {
    color: rgb(106, 17, 17);
    font-family: 'Manrope';
    font-size: 12px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    line-height: 21px;
    margin-bottom: 10px;
  }
  &__loading {
    position: fixed;
    z-index: 999;
    height: 2em;
    width: 2em;
    overflow: visible;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    &:before {
      content: '';
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &:not(:required) {
      font: 0/0 a;
      color: transparent;
      text-shadow: none;
      background-color: transparent;
      border: 0;
    }
    &:not(:required):after {
      content: '';
      display: block;
      font-size: 10px;
      width: 1em;
      height: 1em;
      margin-top: -0.5em;
      -webkit-animation: spinner 1500ms infinite linear;
      -moz-animation: spinner 1500ms infinite linear;
      -ms-animation: spinner 1500ms infinite linear;
      -o-animation: spinner 1500ms infinite linear;
      animation: spinner 1500ms infinite linear;
      border-radius: 0.5em;
      -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
        rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
        rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0,
        rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,
        rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
      box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
        rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
        rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0,
        rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0,
        rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
    }

    @-webkit-keyframes spinner {
      0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @-moz-keyframes spinner {
      0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @-o-keyframes spinner {
      0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes spinner {
      0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
}
</style>
