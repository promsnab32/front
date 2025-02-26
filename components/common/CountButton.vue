<script lang="ts" setup>
const props = defineProps<{
  whenClick: () => void
  disabled?: boolean
}>()

const handleClick = (e: MouseEvent) => {
  e.stopImmediatePropagation()
  props.whenClick()
}
</script>

<template>
  <button
    class="btn-reset counter__btn"
    @click="handleClick"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.counter__btn {
  color: #fff;
  text-align: center;
  font-family: Manrope;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  border-radius: 10px;
  background: #356697;
  padding: 12px 30px;
  opacity: 1;
  &:disabled {
    opacity: 0.5;
  }
  @media screen and (max-width: 500px) {
    padding: 12px 20px;
    font-size: 25px;
  }
}
</style>
