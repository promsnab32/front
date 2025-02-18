<script lang="ts" setup>
defineProps<{
  whenClick: () => void
}>()
</script>

<template>
  <button class="btn-reset counter__btn" @click="whenClick">
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
