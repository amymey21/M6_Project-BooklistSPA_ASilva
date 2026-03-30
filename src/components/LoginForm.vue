<script setup>
import { ref } from 'vue';


const usernameInput = ref('');
const emit = defineEmits(['update:username']);

const opcionesUsuarios = ['Ayelén', 'Iván', 'Elizabeth']

function iniciarSesion() {
  emit('update:username', usernameInput.value)
}

</script>

<template>
  <div class="login-form mb-4">
    <h2>Selecciona tu usuario para agregar libros:</h2>
    <div class="mb-3">
      <label for="username" class="form-label">Usuario:</label>
      <select id="username" class="form-select" v-model="usernameInput">
        <option disabled value="">--Selecciona--</option>
        <option v-for="opcion in opcionesUsuarios" :key="opcion" :value="opcion">
          {{ opcion }}
        </option>
      </select>
    </div>
    <button type="button" class="btn btn-primary" @click="iniciarSesion">Ok</button>

    <p v-if="usernameInput">Bienvenido, {{ usernameInput }}</p>
  </div>
</template>

<style scoped>
h2 {
  color: #144e70;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>