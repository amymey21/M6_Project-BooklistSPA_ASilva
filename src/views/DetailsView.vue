<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import booksJSON from '@/data/books.json';

const route = useRoute();

const book = computed(() => {
  return booksJSON.find((b) => b.id === route.params.id);
});
</script>

<template>
  <div class="container">
    <h1>Detalle del libro</h1>
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img :src="book.portada" class="img-fluid rounded-start" :alt="`Portada del libro ${book.titulo}`">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ book.titulo }}</h5>
            <p class="card-text"><strong>Autor:</strong> {{ book.autor }}</p>
            <p class="card-text"><strong>Precio:</strong> $ {{ book.precio }}</p>
            <p class="card-text"><strong>Stock:</strong> {{ book.stock }} disponibles</p>
            <p class="card-text"><strong>Descripción:</strong> {{ book.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>