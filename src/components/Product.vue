<script setup>
//Import components
import { useCartStore } from 'store/cart'

defineProps({
  name: String,
  description: String,
  image: String,
  price: Number,
})

//Initialization state manager
const store = useCartStore()
</script>
<template>
  <div class="card">
    <img
      :src="'/' + image"
      alt="image"
      class="card-image"
    />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ name }}</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">
          {{ description }}
        </div>
      </div>
      <div class="card-buttons">
        <button
          class="button button-primary button-add-cart"
          @click="
            () => {
              store.openCart()
              store.addProduct({
                name: name,
                price: price,
              })
            }
          "
        >
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">{{ price }} ₽</strong>
      </div>
    </div>
  </div>
</template>
