<template>
  <div class="pagination">
    <PrimePaginator
      :rows="rows"
      :totalRecords="totalPages"
      :rowsPerPageOptions="[30, 40, 50]"
      @page="(e) => whenChangePage(e.page)"
      @update:rows="changeRows"
    />
  </div>
</template>

<script lang="ts" setup>
const rows = ref(30)

const changeRows = (params: number) => {
  emit('rows-change', params)
}
const whenChangePage = (value: number) => {
  emit('page-change', value + 1)
  window.scrollTo({ top: 0, behavior: 'smooth' })
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
.p-paginator {
  background: #d4d4d4 !important;
  color: #fff !important;
}
.p-paginator-page {
  color: #766c6c !important;
}
.p-paginator-page-selected {
  background: #a2a2a2 !important;
}
.p-select {
  background: #a2a2a2 !important;
  color: #fff !important;
  border: 1px solid #a2a2a2 !important;
}
.p-select-label {
  color: #fff !important;
  background: #a2a2a2 !important;
}
.p-select-dropdown {
  background: #c9c9c9 !important;
}
.p-select-list {
  background: #a2a2a2 !important;
  color: #fff !important;
}
.p-select-overlay {
  border: 1px solid #a2a2a2 !important;
}
.p-select-option.p-select-option-selected {
  background: #c9c9c9 !important;
}
</style>
