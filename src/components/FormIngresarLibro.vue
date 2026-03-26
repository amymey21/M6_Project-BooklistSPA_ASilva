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
    descripcion: descripcion.value
  }
  emit('libro-agregado', newBook);
  console.log('libro agregado exitosamente')
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="titulo" class="form-label">Título</label>
        <input v-model="titulo" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label for="Autor" class="form-label">Autor</label>
        <input v-model="autor" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label for="Precio" class="form-label">Precio</label>
        <input v-model="precio" type="number" class="form-control" placeholder="$">
      </div>
      <div class="mb-3">
        <label for="Descipción" class="form-label">Descripción</label>
        <textarea v-model="descripcion" class="form-control" rows="2"></textarea>
      </div>
      <div>
        <Contador :stock="stock" @reset="stock = 0" @incrementar="stock++" @decrementar="stock--" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<style scoped></style>