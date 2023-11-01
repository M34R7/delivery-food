<script setup>
//Import components
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'
import Restaurant from 'components/Restaurant.vue'
import { searchRestaurant } from '../helpers/search'

//Initialization state manager
const partners = ref([])
const products = ref([])
const search = ref('')

//Function for request all partners
onMounted(async () => {
  try {
    const response = await axios.get('mock/db.json')

    partners.value = response.data.db.partners

    const allProducts = Object.assign({}, response.data.db)
    delete allProducts.partners

    products.value = allProducts
  } catch (error) {
    console.log('Ошибка при получыении данных:', error)
  }
})

//Restaurants matching your search
const searchPartners = computed(() => {
  if (search.value.length) {
    return searchRestaurant(partners.value, search.value)
  } else {
    return partners.value
  }
})
</script>
<template>
  <main class="main">
    <div class="container">
      <section class="container-promo">
        <section class="promo pizza">
          <h1 class="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
          <p class="promo-text">
            Блюда из любимого ресторана привезет курьер в перчатках, маске и с
            антисептиком
          </p>
        </section>
      </section>
      <section class="restaurants">
        <div class="section-heading">
          <h2 class="section-title">Рестораны</h2>
          <label class="search">
            <input
              v-model="search"
              type="text"
              class="input input-search"
              placeholder="Поиск блюд и ресторанов"
            />
          </label>
        </div>
        <div class="cards cards-restaurants">
          <Restaurant
            v-for="(partner, index) in searchPartners"
            :key="index"
            :name="partner.name"
            :timeOfDelivery="partner.time_of_delivery"
            :stars="partner.stars"
            :price="partner.stars"
            :kitchen="partner.kitchen"
            :image="partner.image"
            :products="partner.products"
          />
        </div>
      </section>
    </div>
  </main>
</template>
