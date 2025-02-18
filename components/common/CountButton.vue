<script lang="ts" setup>
const props = defineProps<{
  whenClick: () => void
}>()

const handleClick = (e: MouseEvent) => {
  e.stopImmediatePropagation()
  props.whenClick()
}
</script>

<template>
  <button class="btn-reset counter__btn" @click="handleClick">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.counter__btn {
  color: #fff;
  text-align: center;
  font-family: Manrope;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  border-radius: 10px;
  background: #356697;
  padding: 18px 37px;
  padding-top: 11px;
}
</style>
