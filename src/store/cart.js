//Import components
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref(false)

  const price = ref(0)
  const products = ref([])

  function addProduct(addedProduct) {
    const inCart = products.value.findIndex(
      product => product.name === addedProduct.name
    )

    if (inCart !== -1) {
      const count = products.value[inCart].count
      products.value[inCart] = {
        ...products.value[inCart],
        count: count + 1,
      }
    } else {
      products.value.push({
        ...addedProduct,
        count: 1,
      })
    }
    price.value = price.value + addedProduct.price
  }

  function openCart() {
    cart.value = !cart.value
  }

  function removeCount(addedProduct) {
    const inCart = products.value.findIndex(
      product => product.name === addedProduct.name
    )
    const count = products.value[inCart].count

    if (count === 1) {
      if (products.value.length === 1) {
        cart.value = false
      }
      products.value.splice(inCart, 1)
    } else {
      products.value[inCart].count = count - 1
    }
    price.value = price.value - addedProduct.price
  }

  function addCount(addedProduct) {
    const inCart = products.value.findIndex(
      product => product.name === addedProduct.name
    )
    const count = products.value[inCart].count
    products.value[inCart].count = count + 1
    price.value = price.value + addedProduct.price
  }

  return {
    cart,
    price,
    products,
    addProduct,
    openCart,
    removeCount,
    addCount,
  }
})
