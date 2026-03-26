<script setup>
import Libro from '@/components/Libro.vue';
import books from '@/data/books.json';

</script>

<template>
  <div class="row row-cols-md-4 g-2">
    <div v-for="book in books" :key="book.id" class="col">
      <Libro />
    </div>
  </div>
</template>

<style scoped></style>