<script setup>
import { computed } from 'vue';

const libro = {
  id: 2,
  titulo: "Rayuela",
  autor: "Julio Cortázar",
  precio: 10000,
  stock: 8,
  descripcion: "Obra experimental que redefine la narrativa.",
  portada: "/covers/rayuela.svg"
}

const existencias = computed(() => {
  return libro.stock > 0 ? `${libro.stock} disponibles` : 'Agotado';
});

</script>

<template>
  <div class="card">
    <img :src="libro.portada" class="card-img-top" :alt="`Imagen del libro ${libro.title}`">
    <div class="card-body">
      <h5 class="card-title">{{ libro.titulo }}</h5>
      <p class="card-text">{{ libro.precio }}</p>
      <a href="#" class="btn btn-primary">Ver detalle</a>
      <p class="card-text mt-2"><small class="text-muted">{{ existencias }}</small></p>
    </div>
  </div>
</template>

<style scoped></style>