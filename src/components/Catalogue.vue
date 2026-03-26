<script setup>
import Libro from '@/components/Libro.vue';

const props = defineProps({
  books: {
    type: Array,
    required: true
  }
});

</script>

<template>
  <div class="row row-cols-sm-2 row-cols-md-4 g-3" v-if="books.length">
    <div v-for="book in books" :key="book.id" class="col">
      <Libro :libro="book" />
    </div>
  </div>
</template>

<style scoped></style>