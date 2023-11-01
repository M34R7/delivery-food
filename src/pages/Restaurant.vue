<script setup>
//Import components
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import Product from 'components/Product.vue'
import { sortDown, sortUp } from 'helpers/sorting'

//Get current url
const route = useRoute()
const id = route.params.id

//Initialization state manager
const products = ref([])
const restaurant = ref({})

//Function for request all products
onMounted(async () => {
  try {
    const response = await axios.get('/mock/db.json')
    products.value = response.data.db[id]
    restaurant.value = response.data.db.partners.find(
      partner => partner.products == id + '.json'
    )
  } catch (error) {
    console.log('Ошибка при получыении данных:', error)
  }
})
</script>
<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
          <h2 class="section-title restaurant-title">{{ restaurant.name }}</h2>
          <div class="card-info">
            <div class="rating">{{ restaurant.stars }}</div>
            <div class="price">От {{ restaurant.price }} ₽</div>
            <div class="category">{{ restaurant.kitchen }}</div>
          </div>
          <div class="filter">
            <button @click="products.value = sortDown(products)">
              Сначала дорогие
            </button>
            <button @click="products.value = sortUp(products)">
              Сначала дешевые
            </button>
          </div>
        </div>
        <div class="cards cards-menu">
          <Product
            v-for="product in products"
            :key="product.id"
            :name="product.name"
            :description="product.description"
            :price="product.price"
            :image="product.image"
          />
        </div>
      </section>
    </div>
  </main>
</template>
