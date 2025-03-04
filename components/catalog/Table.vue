<script lang="ts" setup>
import type { Table, TableOptionsWithReactiveData } from '@tanstack/vue-table'
import { getCoreRowModel, useVueTable } from '@tanstack/vue-table'
import type { ProductDTO } from '~/types/app'
const props = defineProps<{
  catalogsList: ProductDTO[]
}>()
const data = computed(() => props.catalogsList)
const columns = [
  {
    accessorKey: 'title',
    header: 'Наименование',
  },
  {
    accessorKey: 'article',
    header: 'Артикул',
  },
  {
    accessorKey: 'availability',
    header: 'Наличие',
  },
  {
    accessorKey: 'counter',
    header: 'Добавить',
  },
]
const optionsTable: TableOptionsWithReactiveData<ProductDTO> = {
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
}
const table = useVueTable(optionsTable) as Table<ProductDTO>

const handleClickOnRow = (e: MouseEvent, id: string) => {
  e.stopPropagation()
  navigateTo(`/product/${id}`)
}
</script>

<template>
  <table class="table">
    <thead class="table__head-value">
      <tr class="table__head">
        <th
          v-for="column in table.getHeaderGroups()[0].headers"
          :key="column.id"
        >
          <span class="table__head-text">
            {{ column.column.columnDef.header }}
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in table.getRowModel().rows"
        :key="row.id"
        class="table__row"
      >
        <td
          @click="(e) => handleClickOnRow(e, row.original.documentId)"
          v-for="cell in row.getVisibleCells()"
          :key="cell.id"
          :style="
            cell.getContext().column.id === 'counter' ? 'width: 250px' : ''
          "
        >
          <span
            v-if="cell.getContext().column.id === 'availability'"
            class="table__body-text"
            :class="{
              available: cell.getValue() === 'В наличии',
              unavailable: cell.getValue() === 'Нет в наличии',
              'pre-order':
                cell.getValue() !== 'В наличии' &&
                cell.getValue() !== 'Нет в наличии',
            }"
            >{{ cell.getValue() }}</span
          >
          <CategoryCounter
            :title="cell.getContext().row.original.title"
            :article="cell.getContext().row.original.article"
            :id="cell.getContext().row.original.documentId"
            :count="cell.getContext().row.original.count"
            v-else-if="cell.getContext().column.id === 'counter'"
          />
          <span
            v-else-if="cell.getContext().column.id === 'article'"
            class="table__body-text table__body-text-article"
          >
            {{ cell.getValue() }}
          </span>
          <span class="table__body-text" v-else>{{ cell.getValue() }}</span>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="cart__wrapper">
    <NuxtLink to="/cart" style="text-decoration: none; cursor: pointer">
      <img class="cart__img" src="/img/cart.png" alt="cart" />
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.table__row {
  transition: transform 0.3s ease-in-out;
}
.table__row:hover {
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  transform: scale(1.01);
}
.table {
  width: 100%;
  margin-bottom: 50px;
  @media screen and (max-width: 1286px) {
    margin-bottom: 10px;
  }
  .table {
    width: 100%;
    table-layout: fixed;
  }
  .table__head th:first-child,
  .table__row td:first-child {
    width: 100%;
  }

  .table__head th:not(:first-child),
  .table__row td:not(:first-child) {
    width: 270px;
    @media screen and (max-width: 1286px) {
      width: 100%;
    }
  }
  .table__head th:nth-child(3),
  .table__row td:nth-child(3) {
    width: 100px;
    @media screen and (max-width: 1286px) {
      width: 100%;
    }
  }
  &__row {
    cursor: pointer;
    position: relative;
    @media screen and (max-width: 1286px) {
      padding: 17px 10px 17px 17px;
      margin-bottom: 20px;
      display: flex;
      gap: 15px;
      flex-direction: column;
      border-radius: 14px;
      border: 1px solid #8f8f8f;
      background: #f8f8f8;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  &__row::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #8f8f8f;
    position: absolute;
    bottom: 0;
    left: 0;
    @media screen and (max-width: 1286px) {
      display: none;
    }
  }
  &__head-value {
    margin-bottom: 20px;
    @media screen and (max-width: 1286px) {
      display: none;
    }
  }
  &__head {
    border-radius: 14px;
    outline: 1px solid #8f8f8f;

    background: #f8f8f8;
  }

  &__head-text {
    color: #222;

    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    display: block;
    text-align: start;
    padding: 20px 60px 20px 20px;
  }

  &__body-text {
    color: #222;
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    padding: 20px 20px;
    width: 100%;
    display: block;
    &-article {
      color: #8f8f8f;
    }
    @media screen and (max-width: 1286px) {
      padding: 0;
    }
    @media screen and (max-width: 500px) {
      line-height: 25px;
    }
  }
  &__body-counter {
    @media screen and (max-width: 420px) {
      width: 100%;
    }
  }
}
.text-value {
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;

  &-success {
    color: #17ae0f;
  }

  &-danger {
    color: #f41515;
  }
}
.available {
  color: green;
}

.unavailable {
  color: red;
}

.pre-order {
  color: rgb(0, 0, 0);
}
.divider {
  width: 100%;
  height: 1px;
  background: #8f8f8f;
}
.cart__wrapper {
  display: flex;
  justify-content: flex-end;
}
.cart__img {
  width: 50px;
  height: 50px;
  object-fit: cover;
}
</style>
