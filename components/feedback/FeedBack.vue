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
          class="feedback__form"
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
                  @change="
                    fileName = ($event.target as HTMLInputElement).files?.[0]
                      ?.name
                  "
                />

                <label for="file-input" class="feedback__file-label"
                  >Прикрепить файл</label
                >
              </div>
            </div>
          </div>
          <button class="btn-reset feedback__btn" type="submit">
            Отправить
          </button>
        </Form>
        <p class="feedback__policy">
          Нажимая на кнопку вы даёте согласие на обработку персональных данных в
          соответствии с Политикой конфиденциальности
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Form } from 'vee-validate'
const formSubmitted = ref(false)
const fileName = ref<string | null>()
const validationSchema = useValidation(['name', 'phone', 'email'])
</script>

<style lang="scss" scoped>
.feedback {
  background-image: url('/img/feedback.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  padding: 50px 0 50px 0;
  width: 100%;
  min-height: 750px;
  &__title {
    margin-bottom: 40px;
    color: #fff;
    font-family: 'Unbounded';
    font-size: 50px;
    font-style: normal;
    font-weight: 500;
    line-height: 58px;
    text-transform: uppercase;
  }
  &__wrapper {
    padding: 35px 48px 79px 48px;
    border-radius: 12px;
    border: 1px solid #8f8f8f;
    background: rgba(174, 174, 174, 0.16);
    backdrop-filter: blur(35px);
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
    grid-template-columns: 40% 60%;
    gap: 33px;
  }
  &__form-left,
  &__form-right {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__error {
    color: rgb(106, 17, 17);
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
    outline: none;
    &::placeholder {
      color: #8f8f8f;
      font-family: 'Manrope';
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 21px;
    }
  }
  &__textarea {
    min-height: 132px;
    max-height: 132px;
    padding: 19px 32px;
    border-radius: 10px;
    background: #fff;
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
  }
  &__policy {
    color: #fff;
    font-family: 'Manrope';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 15px;
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
  }
}
</style>
