<script setup>
//Import components
import { ref } from 'vue'
import Cart from 'components/Cart.vue'

//Import images
import logo from 'images/icon/logo.svg'

const active = ref(false)
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

  <div
    class="modal-auth"
    v-if="active"
    @click="active = false"
  >
    <div
      class="modal-dialog modal-dialog-auth"
      @click="$event.stopPropagation()"
    >
      <button
        class="close-auth"
        @click="active = false"
      >
        &times;
      </button>
      <form id="logInForm">
        <fieldset class="modal-body">
          <legend class="modal-title">Авторизация</legend>
          <label class="label-auth">
            <span>Логин</span>
            <input
              id="login"
              type="text"
            />
          </label>
          <label class="label-auth">
            <span>Пароль</span>
            <input
              id="password"
              type="password"
            />
          </label>
        </fieldset>
        <div class="modal-footer">
          <div class="footer-buttons">
            <button
              class="button button-primary button-login"
              type="submit"
            >
              Войти
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>

  <Cart />
</template>
