<script setup>
import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';


const props = defineProps({
  libro: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['delete-book']);

const existencias = computed(() => {
  return props.libro.stock > 0 ? `${props.libro.stock} disponibles` : 'Agotado';
});

const handleDelete = () => {
  emit('delete-book', props.libro.id);
};

</script>

<template>
  <div class="card h-100 flex flex-column">
    <img :src="props.libro.portada" class="card-img-top mt-2" height="150px"
      :alt="`Imagen del libro ${props.libro.title}`">
    <div class="card-body">
      <h5 class="card-title">{{ props.libro.titulo }}</h5>
      <p class="card-text">$ {{ props.libro.precio }}</p>
    </div>
    <div class="card-footer justify-content">
      <p class="card-text mt-2"><small class="text-muted">{{ existencias }}</small></p>
      <RouterLink :to="`/details/${props.libro.id}`" class="btn btn-primary">Ver detalle</RouterLink>
      <button type="button" class="btn btn-danger " @click="handleDelete">
        <Icon icon="lucide:trash-2" />
      </button>
    </div>
  </div>
</template>

<style scoped>
h5 {
  font-size: 1rem;
  font-weight: bold;
  display: flex;
}

.btn {
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
}

button {
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
}
</style>