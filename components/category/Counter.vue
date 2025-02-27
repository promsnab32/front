<script lang="ts" setup>
const cartStore = useCartStore()
const props = defineProps<{
  count: number
  title: string
  article: string
  id: string
}>()

const refCount = ref(props.count || 0)
const getCount = computed(() => refCount.value)
const body = {
  name: props.title,
  count: refCount.value,
  article: props.article,
  id: props.id,
}

watch(props, (newValue) => {
  refCount.value = newValue.count
})
const addToCart = () => {
  if (refCount.value === 0 || refCount.value === null) return

  refCount.value--
  cartStore.updateCart(body, 1)
}

const removeInCart = () => {
  if (refCount.value === props.count) return
  refCount.value++
  cartStore.updateCart(body, -1)
}
</script>

<template>
  <div class="counter">
    <span class="counter__text counter__text-1">Колличество</span>
    <span class="counter__text counter__text-2">{{ refCount }}</span>
    <CommonCountButton :when-click="removeInCart">-</CommonCountButton>
    <CommonCountButton :when-click="addToCart">+</CommonCountButton>
  </div>
</template>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  padding: 8px;
  width: max-content;
  padding-right: 0;
  padding-left: 40px;

  &__text {
    color: #8f8f8f;

    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;

    &-1 {
      display: block;
      margin-right: 20px;
    }

    &-2 {
      width: 25px;
      margin-right: 20px;
    }
  }
}
</style>
