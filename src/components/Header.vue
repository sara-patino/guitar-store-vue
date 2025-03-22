<template>
  <header class="py-5 header">
    <div class="container-xl">
      <div class="row justify-content-center justify-content-md-between">
        <div class="col-8 col-md-3">
          <a href="index.html">
            <img class="img-fluid" src="/img/logo.svg" alt="imagen logo" />
          </a>
        </div>
        <nav class="col-md-6 mt-5 d-flex align-items-start justify-content-end">
          <div class="carrito">
            <img class="img-fluid" src="/img/carrito.png" alt="imagen carrito" />
            <div id="carrito" class="bg-white p-3">
              <p v-if="isEmpty" class="text-center">El carrito está vacío</p>
              <template v-else>
                <table class="w-100 table">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="guitar in cart" :key="guitar.id">
                      <td>
                        <img class="img-fluid" :src="`/img/${guitar.image}.jpg`" alt="imagen guitarra" />
                      </td>
                      <td>{{ guitar.name }}</td>
                      <td class="fw-bold">${{ guitar.price }}</td>
                      <td class="flex align-items-start gap-4">
                        <button type="button" class="btn btn-dark" @click="decreaseQuantity(guitar.id)">-</button>
                        {{ guitar.quantity }}
                        <button type="button" class="btn btn-dark" @click="increaseQuantity(guitar.id)">+</button>
                      </td>
                      <td>
                        <button class="btn btn-danger" type="button" @click="removeFromCart(guitar.id)">X</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p class="text-end">Total a pagar: <span class="fw-bold">${{ cartTotal }}</span></p>
                <button class="btn btn-dark w-100 mt-3 p-2" @click="clearCart">Vaciar Carrito</button>
              </template>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  cart: Array,
  removeFromCart: Function,
  increaseQuantity: Function,
  decreaseQuantity: Function,
  clearCart: Function,
  isEmpty: Boolean,
  cartTotal: Number
});
</script>