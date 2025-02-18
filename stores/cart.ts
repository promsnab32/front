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
    if( count === 1) {
      const el = cartList.value.findIndex(item => item.id === product.id)
      if(el !== -1) {
        cartList.value[el].count++
      } else {
        product.count = 1
        cartList.value.push(product)
      }
    } else {
        const el = cartList.value.findIndex(item => item.id === product.id)
          if(el !== -1) {
            cartList.value[el].count--
            if( cartList.value[el].count === 0 ) {
              cartList.value.splice(el, 1)
            }
          }
    }
  }

  const removeAll = () => {
    cartList.value = []
  }
  return {
    removeAll,
    cartList,
    updateCart
  }
})
