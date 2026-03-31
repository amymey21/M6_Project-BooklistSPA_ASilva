<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { books as initBooks } from '@/data/books';
import { RouterLink } from 'vue-router';
import Contador from '@/components/Contador.vue';

const route = useRoute();
const books = ref([]);

const book = computed(() => {
  const bookId = String(route.params.id);
  return books.value.find((b) => String(b.id) === bookId);
});

onMounted(() => {
  const storedBooks = JSON.parse(localStorage.getItem('books')) || []
  books.value = storedBooks.length ? storedBooks : initBooks.value
})

const updateStock = (newStock) => {
  if (book.value) {
    book.value.stock = newStock;
    localStorage.setItem('books', JSON.stringify(books.value));
  }
};
</script>

<template>
  <div class="container" v-if="book">
    <h1>Detalle del libro</h1>
    <div class="card mb-3" style="max-width: 100%; max-block-size: 50%;">
      <div class=" row g-0">
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
            <br>
            <div class="row">
              <div class="col-md-3">
                <p class="card-text"><strong>Modificar stock:</strong></p>
              </div>
              <div class="col-md-9">
                <Contador :model-value="book.stock" @update:modelValue="updateStock" />
              </div>
            </div>
          </div>
          <div class="btn btn-info m-5 float-end">
            <RouterLink :to="'/'">Volver</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class=" container">
    <h1>Detalle del libro</h1>
    <p>Libro no encontrado.</p>
  </div>

</template>

<style scoped>
img {
  max-width: 80%;
  height: auto;
}

h5 {
  font-size: 2rem;
  font-weight: bold;
}

p {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.btn {
  background-color: rgba(36, 49, 154, 0.905);
  border: none;
  color: white;
}

a {
  padding: 0.5rem;
  text-decoration: none;
  color: white;
}
</style>