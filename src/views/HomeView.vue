<script setup>
import { ref, onMounted } from 'vue';
import Catalogue from '../components/Catalogue.vue';
import FormIngresarLibro from '@/components/FormIngresarLibro.vue';
import LoginForm from '@/components/LoginForm.vue';
import { books } from '@/data/books';

const props = defineProps({ username: String });
const emit = defineEmits(['update:username']);

const mensaje = "Welcome to BookList!";
const visible = ref(true);

const handlePush = (newBook) => {
  books.value.push(newBook);
}

const handleDelete = (bookId) => {
  books.value = books.value.filter((book) => book.id !== bookId);
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
        <Catalogue :books="books" @delete-book="handleDelete" />
      </div>
      <div class="col-4 border p-2">
        <LoginForm :username="props.username" @update:username="emit('update:username', $event)" />
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

h3 {
  color: #144e70;
  font-weight: bold;
  text-align: center;
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