<script setup>
import logo from 'images/icon/logo.svg'
import instagram from 'images/social/instagram.svg'
import facebook from 'images/social/fb.svg'
import vk from 'images/social/vk.svg'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-block">
        <router-link
          to="/"
          class="logo"
        >
          <img
            :src="logo"
            alt="logo"
            class="logo footer-logo"
        /></router-link>
        <nav class="footer-nav">
          <a
            href="#"
            class="footer-link"
            >Ресторанам
          </a>
          <a
            href="#"
            class="footer-link"
            >Курьерам</a
          >
          <a
            href="#"
            class="footer-link"
            >Пресс-центр</a
          >
          <a
            href="#"
            class="footer-link"
            >Контакты</a
          >
        </nav>
        <div class="social-links">
          <a
            href="#"
            class="social-link"
            ><img
              :src="instagram"
              alt="instagram"
          /></a>
          <a
            href="#"
            class="social-link"
            ><img
              :src="facebook"
              alt="facebook"
          /></a>
          <a
            href="#"
            class="social-link"
            ><img
              :src="vk"
              alt="vk"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>
