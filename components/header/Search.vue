<script lang="ts" setup>
import { useCustomFetch } from '#imports'
import type { ProductDTO, ResponseDTO } from '~/types/app'
const value = ref('')
let timeoutId: any
const searchList = ref<ProductDTO[]>([])

const whenClickToLink = (id: string) => {
  navigateTo(`/product/${id}`)
  searchList.value = []
}
const whenChange = () => {
  clearTimeout(timeoutId) // Сбрасываем предыдущий таймер

  timeoutId = setTimeout(async () => {
    try {
      const response = await useCustomFetch<'', ResponseDTO<ProductDTO[]>>(
        apiProducts,
        {
          query: {
            'filters[title][$contains]': value.value.charAt(0).toUpperCase(),
          },
        }
      )
      searchList.value = response.data
    } catch (error) {
      console.error('Ошибка при поиске:', error)
    }
  }, 500)
}
</script>

<template>
  <div class="header__search">
    <input
      v-model="value"
      @input="whenChange"
      class="header__search-input"
      type="text"
      placeholder="Поиск по сайту"
    />
    <button class="header__search-btn">Поиск</button>

    <div class="search__list-wrapper">
      <ul class="list-reset search__list">
        <li
          v-for="(item, index) in searchList"
          :key="index"
          class="search__item"
        >
          <NuxtLink
            @click="whenClickToLink(item.documentId)"
            class="search__item-link"
          >
            <span class="search__item-text">
              {{ item.title }}
            </span>
            <span class="search__item-text search__item-text-has">{{
              item.availability
            }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  &__list-wrapper {
    padding: 10px 0;
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
    background: #ffffff;
    border-radius: 8px;
    padding-bottom: 0;
    overflow: hidden;
  }

  &__item {
    position: relative;
    padding: 8px 10px;
    transition: background 0.3s ease;

    &:hover {
      background: #d5d5d5;
    }

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background: #8f8f8f;
      bottom: 0;
      left: 0;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__item-link {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    text-decoration: none;
  }

  &__item-text {
    color: #222;
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;

    &-has {
      font-size: 14px;

      &-success {
        color: #17ae0f;
      }

      &-danger {
        color: #f41515;
      }
    }
  }
}
.header__search {
  position: relative;
  width: 100%;
  max-width: 650px;
  z-index: 1;
}
.header__search-input {
  border-radius: 7px;
  border: 1px solid #8f8f8f;
  background: #fff;
  font-family: 'Manrope';
  color: black;
  font-size: 15px;
  font-weight: 700;
  padding: 25px 0 25px 10px;
  max-height: 30px;
  outline: none;
  width: 73%;
  z-index: 3;
}

.header__search-btn {
  z-index: -1;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 15px 71px;
  color: #fff;
  font-size: 14px;
  font-family: 'Manrope';
  font-weight: 500;
  background-color: #356697;
  border-radius: 7px;
  border: 1px solid #8f8f8f;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2d4f76;
  }

  &:focus {
    outline: none;
  }
}
</style>
