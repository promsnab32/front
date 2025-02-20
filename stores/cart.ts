import { defineStore } from 'pinia'

type TCart = {
  name: string
  count: number
  article: string
  id: string
}

export const useCartStore = defineStore('cart', () => {
  const cartList = ref<TCart[]>([])

  const updateCart = (product: TCart, count: number) => {
    const elIndex = cartList.value.findIndex(item => item.id === product.id)

    if (elIndex !== -1) {
      cartList.value[elIndex].count += count

      if (cartList.value[elIndex].count <= 0) {
        cartList.value.splice(elIndex, 1)
      }
    } else if (count > 0) {
      cartList.value.push({ ...product, count })
    }
  }

  const removeAll = () => {
    cartList.value = []
  }

  return {
    cartList,
    updateCart,
    removeAll
  }
})