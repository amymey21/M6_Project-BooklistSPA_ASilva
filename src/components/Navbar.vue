<script setup>

</script>

<template>
  <nav>
    <img src="/src/assets/BookList.svg" alt="Logo">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
  background-color: #f2f1f1;
  padding: 1rem;
}

a {
  font-size: 1.1rem;
  text-decoration: none;
  color: #144e70;
  font-weight: bold;
}

:hover {
  color: #037973;
}

nav img {
  height: 50px;
}
</style>