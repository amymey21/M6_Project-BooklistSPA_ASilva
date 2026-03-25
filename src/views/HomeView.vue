<script setup>
import { ref, onMounted } from 'vue';
import Catalogue from './Catalogue.vue';
import Contador from '../components/Contador.vue';

const mensaje = "Welcome to BookList!";
const visible = ref(true);

onMounted(() => {
  setTimeout(() => {
    visible.value = false;
  }, 1900);
});
</script>

<template>

  <Transition name="fade">
    <h2 class="" v-if="visible">{{ mensaje }}</h2>
  </Transition>

  <div class="container">
    <div class="row m-4">
      <div class="col-7">
        <h1>Catálogo</h1>
        <Catalogue />
      </div>
      <div class="col-5 border p-2">
        <Contador />
        <h3 class="mt-3">Ingresar título</h3>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>