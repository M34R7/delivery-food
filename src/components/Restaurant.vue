<script setup>
defineProps({
  name: String,
  timeOfDelivery: Number,
  stars: Number,
  price: Number,
  kitchen: String,
  image: String,
  products: String,
})
</script>
<template>
  <router-link
    :to="'/restaurant/' + products.replace(new RegExp('.json', 'g'), '')"
    class="card card-restaurant"
  >
    <img
      :src="image"
      alt="image"
      class="card-image"
    />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ name }}</h3>
        <span class="card-tag tag">{{ timeOfDelivery }} мин</span>
      </div>
      <div class="card-info">
        <div class="rating">{{ stars }}</div>
        <div class="price">От {{ price }} ₽</div>
        <div class="category">{{ kitchen }}</div>
      </div>
    </div>
  </router-link>
</template>
