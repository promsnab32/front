<template>
  <section class="feedback">
    <div class="container">
      <h2 class="feedback__title">ФОРМА заявки</h2>
      <div class="feedback__wrapper">
        <p class="feedback__description">
          Оставьте заявку и мы свяжемся с Вами в ближайшее время
        </p>
        <Form
          :validation-schema="validationSchema"
          id="form"
          name="form"
          class="feedback__form"
          @submit="handleSubmit"
        >
          <div class="feedback__form-wrapper">
            <div class="feedback__form-left">
              <Field
                class="feedback__input"
                type="text"
                id="name"
                name="name"
                placeholder="Имя Фамилия"
              />
              <ErrorMessage
                name="name"
                v-if="!formSubmitted"
                class="feedback__error"
              />
              <Field
                class="feedback__input"
                type="phone"
                id="phone"
                name="phone"
                placeholder="+7 (___) ___-__-__"
              />
              <ErrorMessage
                name="phone"
                v-if="!formSubmitted"
                class="feedback__error"
              />
              <Field
                class="feedback__input"
                type="email"
                id="email"
                placeholder="E-mail"
                name="email"
              />
              <ErrorMessage
                name="email"
                v-if="!formSubmitted"
                class="feedback__error"
              />
            </div>
            <div class="feedback__form-right">
              <textarea
                v-model="text"
                class="feedback__textarea"
                type="text"
                id="text"
                name="text"
                placeholder="Комментарий"
              ></textarea>
              <div class="feedback__file-upload">
                <span class="feedback__file-name"
                  >{{ fileName || 'Файл' }}
                </span>
                <input
                  type="file"
                  id="file-input"
                  class="feedback__file-input"
                  @change="handleFileUpload"
                />

                <label for="file-input" class="feedback__file-label"
                  >Прикрепить файл</label
                >
              </div>
            </div>
          </div>
          <button class="btn-reset feedback__btn" type="submit" form="form">
            Отправить
          </button>
        </Form>
        <a href="/doc/policy.pdf" class="feedback__policy" target="_blank">
          Нажимая на кнопку вы даёте согласие на обработку персональных данных в
          соответствии с Политикой конфиденциальности
        </a>
        <p v-if="submitTrue" class="feedback__submiteTrue">
          Спасибо, что выбрали нас! В течении 15 минут с Вами свяжется менеджер
          по Вашей заявке.
        </p>
      </div>
      <div v-if="loading" class="feedback__loading">Loading&#8230;</div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useFormSender } from '~/composables/useSender'
import { useValidation } from '@/composables/useValidation'

const loading = ref(false)
const submitTrue = ref(false)
const formSubmitted = ref(false)

const fileName = ref<string | null>(null)
const text = ref('')
const file = ref<File | null>(null)

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

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  file.value = target.files?.[0] || null
  fileName.value = file.value?.name || 'Файл'
}

const handleSubmit = async (
  values: any,
  { resetForm }: { resetForm: () => void }
) => {
  try {
    await sendToForm({ ...values, text: text.value }, file.value || undefined)
    buttonLoad()
  } catch (error) {
    console.error('Ошибка при отправке формы:', error)
  } finally {
    resetForm()
    text.value = ''
    file.value = null
    fileName.value = null
  }
}
</script>

<style lang="scss" scoped>
.feedback {
  position: relative;
  background-image: url('/img/feedback.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  padding: 30px 0 50px 0;
  width: 100%;
  min-height: 750px;
  &__title {
    margin-bottom: 40px;
    color: #fff;
    font-family: 'Unbounded';
    font-size: 50px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    @media screen and (max-width: 748px) {
      line-height: normal;
      font-size: 40px;
      margin-bottom: 20px;
    }
    @media screen and (max-width: 636px) {
      font-size: 25px;
    }
  }
  &__wrapper {
    padding: 35px 48px 79px 48px;
    border-radius: 12px;
    border: 1px solid #8f8f8f;
    background: rgba(174, 174, 174, 0.16);
    backdrop-filter: blur(35px);
    @media screen and (max-width: 1286px) {
      padding: 20px 15px 50px 15px;
    }
  }
  &__description {
    max-width: 400px;
    margin-bottom: 16px;
    color: #fff;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
  }
  &__form-wrapper {
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 33px;
    @media screen and (max-width: 1286px) {
      grid-template-columns: 1fr;
      gap: 10px;
      margin-bottom: 10px;
    }
  }
  &__form-left,
  &__form-right {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__error {
    color: #ff0000;
    font-family: 'Manrope';
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__input {
    padding: 19px 32px;
    border-radius: 10px;
    background: #fff;
    color: #8f8f8f;
    outline: none;
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
  &__textarea {
    min-height: 132px;
    max-height: 132px;
    padding: 19px 32px;
    border-radius: 10px;
    background: #fff;
    color: #8f8f8f;
    resize: none;
    outline: none;
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
  &__btn {
    margin-bottom: 35px;
    padding: 17px 0;
    width: 100%;
    color: #fff;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    border-radius: 10px;
    background: #fb6415;
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
  &__policy {
    position: relative;
    color: #fff;
    font-family: 'Manrope';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -3px;
      width: 0;
      height: 2px;
      background-color: #fb6415;
      transition: width 0.3s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
  &__file-upload {
    width: 100%;
    max-height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    border-radius: 8px;
  }
  &__file-input {
    display: none;
    align-items: flex-end;
    justify-content: flex-end;
  }

  &__file-label {
    width: 300px;
    height: 100%;
    background: #2d6099;
    padding: 20px 20px;
    cursor: pointer;
    border-radius: 8px;
    color: #fff;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    text-align: center;
    @media screen and (max-width: 748px) {
      padding: 12px 21px;
      font-size: 18px;
      width: 250px;
    }
    @media screen and (max-width: 514px) {
      padding: 12px 0px;
      font-size: 13px;
      width: 160px;
    }
  }

  &__file-label:hover {
    background: #204d80;
  }
  &__file-name {
    padding: 19px 32px;
    color: #8f8f8f;
    font-family: 'Manrope';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    @media screen and (max-width: 748px) {
      padding: 12px 21px;
      font-size: 18px;
    }
  }
  &__submiteTrue {
    padding: 20px 0;
    color: #08fe00;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
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
