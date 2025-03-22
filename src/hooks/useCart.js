import { ref, computed, watch } from 'vue';
import { db } from '../data/db';

export function useCart() {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const data = ref(db);
  const cart = ref(initialCart());

  const MAX_ITEMS = 5;

  watch(cart, (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
  }, { deep: true });

  function addToCart(item) {
    const itemExists = cart.value.findIndex((guitar) => guitar.id === item.id);
    if (itemExists >= 0) {
      if (cart.value[itemExists].quantity >= MAX_ITEMS) return;
      cart.value[itemExists].quantity++;
    } else {
      item.quantity = 1;
      cart.value.push(item);
    }
  }

  function removeFromCart(id) {
    cart.value = cart.value.filter((guitar) => guitar.id !== id);
  }

  function increaseQuantity(id) {
    cart.value = cart.value.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  }

  function decreaseQuantity(id) {
    cart.value = cart.value.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
  }

  function clearCart() {
    cart.value = [];
  }

  // Computed properties
  const isEmpty = computed(() => cart.value.length === 0);
  const cartTotal = computed(() => cart.value.reduce((total, item) => total + item.quantity * item.price, 0));

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  };
}
