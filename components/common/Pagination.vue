<template>
  <div class="pagination">
    <PrimePaginator
      :rows="rows"
      :totalRecords="totalPages"
      :rowsPerPageOptions="[10, 20, 30, 40, 50]"
      @page="(e) => whenChangePage(e.page)"
      @update:rows="changeRows"
    />
  </div>
</template>

<script lang="ts" setup>
const rows = ref(10)

const changeRows = (params: number) => {
  emit('rows-change', params)
}
const whenChangePage = (value: number) => {
  emit('page-change', value + 1)
}
defineProps<{
  totalPages: number
  currentPage: number
}>()

const emit = defineEmits(['page-change', 'rows-change'])
</script>

<style>
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
