<script setup>
import Navbar from '@/components/Navbar.vue'
import Libro from './components/Libro.vue';
import books from '@/data/books.json';

</script>

<template>
  <Navbar />
  <div class="row row-cols-md-4 g-2">
    <div v-for="book in books" :key="book.id" class="col">
      <Libro />
    </div>
  </div>
  <RouterView />
</template>

<style scoped></style>
