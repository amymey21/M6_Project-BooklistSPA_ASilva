<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  username: {
    type: String,
    default: 'Invitado'
  }
});
</script>

<template>
  <nav>
    <img src="/src/assets/BookList.svg" alt="Logo">
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li><span v-if="username">Usuario: {{ username }}</span></li>
    </ul>

  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: #f2f1f1;
  margin-bottom: 1rem;
}

ul {
  display: flex;
  gap: 2rem;
  margin: 1rem;
  padding: 0rem, 1rem, 0rem, 0rem;
}

li {
  list-style: none;
  display: inline;
  font-size: 1.1rem;
  color: #144e70;
  font-weight: lighter;
}

a {
  /* font-size: 1.1rem; */
  text-decoration: none;
  color: #144e70;
  font-weight: bold;
}

:hover {
  color: #037973;
}

nav img {
  height: 55px;
}
</style>