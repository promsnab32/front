<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const configStore = useConfigStore()
await useAsyncData('config', () => configStore.getEnv())

onMounted(() => {
  const updateZoom = () => {
    if (window.innerWidth <= 636) {
      document.body.style.zoom = '1' // Отмена зума
    } else {
      document.body.style.zoom = '0.76' // Устанавливаем зум
    }
  }

  updateZoom() // Вызываем при монтировании
  window.addEventListener('resize', updateZoom) // Следим за изменением размера окна

  onUnmounted(() => {
    window.removeEventListener('resize', updateZoom)
  })
})
</script>

<style lang="scss"></style>
