<template>
  <div class="col-md-6 col-lg-4 my-4 row align-items-center">
    <div class="col-4">
      <img class="img-fluid" :src="`/img/${guitar.image}.jpg`" alt="imagen guitarra" />
    </div>
    <div class="col-8">
      <h3 class="text-black fs-4 fw-bold text-uppercase">{{ guitar.name }}</h3>
      <p>{{ guitar.description }}</p>
      <p class="fw-black text-primary fs-3">{{ guitar.price }}</p>
      <p v-if="guitar.stock < 1" class="text-danger fw-bold">Sold Out</p>
      <p v-else class="text-success fw-bold">Disponible</p>
      <button 
        type="button"
        class="btn btn-dark w-100"
        @click="addToCart(guitar)"
        :disabled="guitar.stock < 1"
      >Agregar al Carrito</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  guitar: Object,
  addToCart: Function
});
</script>
