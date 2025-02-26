<template>
  <div class="pagination">
    <button
      @click="btnPrev"
      class="btn-reset pagination__btn"
      :disabled="currentPage === 1"
    >
      Назад
    </button>
    <button
      v-for="pageNum in totalPages"
      :key="pageNum"
      @click="toPage(pageNum)"
      class="btn-reset pagination__btn"
      :class="{ active: pageNum === currentPage }"
    >
      {{ pageNum }}
    </button>
    <button
      @click="btnNext"
      class="btn-reset pagination__btn"
      :disabled="currentPage === totalPages"
    >
      Вперед
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  totalPages: number
  currentPage: number
}>()

const emit = defineEmits(['page-change'])

const btnPrev = () => {
  if (props.currentPage > 1) {
    emit('page-change', props.currentPage - 1)
  }
}

const btnNext = () => {
  if (props.currentPage < props.totalPages) {
    emit('page-change', props.currentPage + 1)
  }
}

const toPage = (pageNum: number) => {
  emit('page-change', pageNum)
}
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.pagination__btn {
  padding: 5px 10px;
  cursor: pointer;
}

.pagination__btn.active {
  background-color: #007bff;
  color: white;
}

.pagination__btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
