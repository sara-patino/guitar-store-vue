<template>
  <Header
    :cart="cart"
    :removeFromCart="removeFromCart"
    :increaseQuantity="increaseQuantity"
    :decreaseQuantity="decreaseQuantity"
    :clearCart="clearCart"
    :isEmpty="isEmpty"
    :cartTotal="cartTotal"
  />

  <main class="container-xl mt-5">
    <h2 class="text-center">Nuestra Colección</h2>
    <div class="row mt-5">
      <Guitar
        v-for="guitar in data"
        :key="guitar.id"
        :guitar="guitar"
        :addToCart="addToCart"
      />
    </div>
  </main>

  <footer class="bg-dark mt-5 py-5">
    <div class="container-xl">
      <p class="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
    </div>
  </footer>
</template>

<script setup>
import Header from './components/Header.vue';
import Guitar from './components/Guitar.vue';
import { useCart } from './hooks/useCart';

const {
  data,
  cart,
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
  isEmpty,
  cartTotal
} = useCart();
</script>
