<script setup>
//Import components
import { useCartStore } from 'store/cart'

//Initialization state manager
const store = useCartStore()
</script>
<template>
  <div
    class="modal modal-cart"
    v-if="store.cart"
    @click="store.openCart()"
  >
    <div
      class="modal-dialog"
      @click="$event.stopPropagation()"
    >
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button
          class="close"
          @click="store.openCart()"
        >
          &times;
        </button>
      </div>
      <div class="modal-body">
        <div
          class="food-row"
          v-if="store.products.length"
          v-for="(product, index) in store.products"
          :key="index"
        >
          <span class="food-name">{{ product.name }}</span>
          <strong class="food-price">{{ product.price }} ₽</strong>
          <div class="food-counter">
            <button
              class="counter-button"
              @click="store.removeCount(product)"
            >
              -
            </button>
            <span class="counter">{{ product.count }}</span>
            <button
              class="counter-button"
              @click="store.addCount(product)"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <span class="modal-pricetag">{{ store.price }} ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
          <button
            class="button clear-cart"
            @click="store.openCart()"
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
