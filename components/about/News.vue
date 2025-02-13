<template>
  <section class="news">
    <div class="container">
      <h2 class="news__title">Новости</h2>
      <div class="news__slider">
        <CommonSwiper
          :slidesperview="3"
          :pagination="true"
          @instance="setSwiperInstance"
          :slide-card="card"
          custom-button-next="news__custom-button-next"
          custom-button-prev="news__custom-button-prev"
        >
          <template #slide="{ item }">
            <div class="news__news-wrapper">
              <img class="news__img" :src="item.img" alt="news-img" />
              <p class="news__text">{{ item.description }}</p>
            </div>
          </template></CommonSwiper
        >
      </div>
      <div class="news__buttons">
        <button
          @click="handleClickPrev"
          :disabled="!swiperRef || swiperRef.activeIndex === 0"
          class="btn-reset news__custom-button-prev"
        ></button>
        <button
          @click="handleClickNext"
          :disabled="!swiperRef || swiperRef.isEnd"
          class="btn-reset news__custom-button-next"
        ></button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const swiperRef = ref<any>(null)
const card = newsCard

const setSwiperInstance = (instance: any) => {
  swiperRef.value = instance
}

const handleClickPrev = () => {
  if (swiperRef.value) {
    swiperRef.value.slidePrev()
  }
}

const handleClickNext = () => {
  if (swiperRef.value) {
    swiperRef.value.slideNext()
  }
}
</script>

<style scoped lang="scss">
.news {
  padding: 44px 0 20px 0;
  &__title {
    margin-bottom: 20px;
    color: #000;
    font-family: 'Unbounded';
    font-size: 50px;
    font-style: normal;
    font-weight: 500;
    line-height: 58px;
    text-transform: uppercase;
  }
  &__slider {
    margin-bottom: 20px;
  }
  &__news-wrapper {
    padding: 90px 150px;
    border-radius: 12px;
    border: 1px solid #8f8f8f;
    background: #f0f2f6;
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
  }
  &__custom-button-prev {
    background-image: url('/svg/button-prev.svg');
    background-repeat: no-repeat;
    width: 62px;
    height: 13px;
    &:disabled {
      opacity: 0.5;
    }
  }
  &__custom-button-next {
    background-image: url('/svg/button-next.svg');
    background-repeat: no-repeat;
    width: 62px;
    height: 13px;
    &:disabled {
      opacity: 0.5;
    }
  }
}
.swiper-pagination-bullet {
  background: #55545b;
  opacity: 1;
  width: 10px;
  height: 10px;
}
.swiper-pagination-bullet-active {
  background: #fff;
}
.swiper-pagination {
  text-align: right;
}
.swiper-pagination-bullets.swiper-pagination-horizontal {
  width: 300px;
  right: 0;
  left: auto;
  bottom: 0;
}
</style>
