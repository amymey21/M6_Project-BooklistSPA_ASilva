<script setup>
import { ref, onMounted } from 'vue';
import Catalogue from '../components/Catalogue.vue';
import FormIngresarLibro from '@/components/FormIngresarLibro.vue';
import booksJSON from '@/data/books.json';

const books = ref(booksJSON);
const mensaje = "Welcome to BookList!";
const visible = ref(true);

const handlePush = (newBook) => {
  books.value.push(newBook);
}

onMounted(() => {
  setTimeout(() => {
    visible.value = false;
  }, 2000);
});
</script>

<template>

  <Transition name="fade">
    <h2 class="" v-if="visible">{{ mensaje }}</h2>
  </Transition>

  <div class="container">
    <div class="row">
      <div class="col-8">
        <h1>Catálogo</h1>
        <Catalogue :books="books" />
      </div>
      <div class="col-4 border p-2">
        <h3 class="mt-3">Ingresar título al catálogo</h3>
        <FormIngresarLibro @libro-agregado="handlePush" />
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  position: fixed;
  top: 18px;
  left: 30%;
  color: #144e70;
  font-weight: bold;
  text-align: center;
  z-index: 3;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>