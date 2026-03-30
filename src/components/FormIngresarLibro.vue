<script setup>
import Contador from '@/components/Contador.vue';
import { ref } from 'vue';

const titulo = ref('');
const autor = ref('');
const precio = ref(0);
const descripcion = ref('');
const stock = ref(0);

const emit = defineEmits(['libro-agregado']);

const handleSubmit = () => {
  const newBook =
  {
    id: crypto.randomUUID(),
    titulo: titulo.value,
    autor: autor.value,
    precio: precio.value,
    stock: stock.value,
    descripcion: descripcion.value,
    portada: '/covers/default-book.svg'
  }
  emit('libro-agregado', newBook);
  console.log('libro agregado exitosamente')

  titulo.value = '';
  autor.value = '';
  precio.value = 0;
  descripcion.value = '';
  stock.value = 0;
}


</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="titulo" class="form-label">Título</label>
        <input id="titulo" v-model="titulo" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label for="autor" class="form-label">Autor</label>
        <input id="autor" v-model="autor" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label for="precio" class="form-label">Precio</label>
        <input id="precio" v-model="precio" type="number" class="form-control" placeholder="$">
      </div>
      <div class="mb-3">
        <label for="descripcion" class="form-label">Descripción</label>
        <textarea id="descripcion" v-model="descripcion" class="form-control" rows="2"></textarea>
      </div>
      <div class="mb-3">
        <label for="stock" class="form-label">N° de ejemplares</label>
        <Contador v-model="stock" />
      </div>
      <button type="submit" class="btn btn-primary">Ingresar</button>
    </form>
  </div>
</template>

<style scoped></style>