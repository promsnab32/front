<script lang="ts" setup>
const cartStore = useCartStore()
const props = defineProps<{
  count: number | null
  title: string
  article: string
  id: string
}>()

const refCount = ref(0)

const increaseCount = () => {
  if (props.count !== null && refCount.value < props.count) {
    refCount.value++
  }
}

const decreaseCount = () => {
  if (refCount.value > 0) {
    refCount.value--
  }
}

const addToCart = () => {
  if (refCount.value > 0) {
    cartStore.updateCart(
      {
        name: props.title,
        count: refCount.value,
        article: props.article,
        id: props.id,
      },
      refCount.value
    )

    refCount.value = 0
  }
}
</script>

<template>
  <div class="counter">
    <span class="counter__text counter__text-1">Колличество</span>
    <span class="counter__text counter__text-2">{{ refCount }}</span>
    <CommonCountButton :when-click="decreaseCount" :disabled="refCount <= 0"
      >-</CommonCountButton
    >
    <CommonCountButton
      :when-click="increaseCount"
      :disabled="props.count !== null && refCount >= props.count"
      >+</CommonCountButton
    >
  </div>
  <button class="btn-reset counter__btn-2" @click="addToCart">
    Добавить в корзину
  </button>
</template>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
  gap: 10px;
  width: max-content;

  &__controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__label {
    color: #8f8f8f;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 500;
  }
  &__text-2 {
    color: #000;
    text-align: center;
    font-family: 'Manrope';
    font-size: 20px;
    font-weight: 500;
    line-height: 21px;
    border-radius: 10px;
    background: #fff;
    padding: 18px 37px;
  }
  &__btn-2 {
    margin-top: 20px;
    padding: 12px 24px;
    background-color: #fb6415;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:disabled {
      background-color: #f0f2f6;
      cursor: not-allowed;
    }
  }
}
</style>
