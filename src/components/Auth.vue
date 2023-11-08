<script setup>
//Import components
import { defineProps, defineEmits } from 'vue'

//Initialization props
const { active, setActive } = defineProps(['active'])

//Initialization emits
const emits = defineEmits(['setActive'])
</script>
<template>
  <div
    class="modal-auth"
    v-if="active"
    @click="emits('setActive', false)"
  >
    <div
      class="modal-dialog modal-dialog-auth"
      @click="$event.stopPropagation()"
    >
      <button
        class="close-auth"
        @click="emits('setActive', false)"
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
</template>
