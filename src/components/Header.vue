<script setup>
//Import components
import { ref } from 'vue'
import Cart from 'components/Cart.vue'
import Auth from 'components/Auth.vue'

//Import images
import logo from 'images/icon/logo.svg'

//Auth modal state
const active = ref(false)

//Function to edit auth modal state
const setActive = modal => {
  active.value = modal
}
</script>
<template>
  <div class="container">
    <header class="header">
      <router-link
        to="/"
        class="logo"
      >
        <img
          :src="logo"
          alt="Logo"
      /></router-link>
      <label class="address">
        <input
          type="text"
          class="input input-address"
          placeholder="Адрес доставки"
        />
      </label>
      <div class="buttons">
        <span class="user-name"></span>
        <button class="button button-primary button-auth">
          <span class="button-auth-svg"></span>
          <span
            class="button-text"
            @click="active = !active"
            >Войти</span
          >
        </button>
        <button
          class="button button-cart"
          id="cart-button"
        >
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
        </button>
        <button class="button button-primary button-out">
          <span class="button-text">Выйти</span>
          <span class="button-out-svg"></span>
        </button>
      </div>
    </header>
  </div>
  <Auth
    :active="active"
    @setActive="setActive"
  />
  <Cart />
</template>
