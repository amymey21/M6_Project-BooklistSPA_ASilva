<script setup>

</script>

<template>
  <section class="about container py-4">
    <h1 class="mb-3">Sobre BookList</h1>

    <p>
      BookList es una aplicación web creada para gestionar un catálogo de libros de forma
      simple y visual. El objetivo del proyecto es practicar una experiencia completa de
      front-end con Vue, incluyendo componentes reutilizables, rutas, formularios y
      persistencia local de datos.
    </p>

    <p>
      En la vista principal puedes explorar el catálogo, iniciar sesión con un nombre de
      usuario y agregar nuevos títulos. Cada libro cuenta con su página de detalle,
      donde se muestran sus datos principales y se puede actualizar el stock disponible.
    </p>

    <h2 class="mt-4">Funciones principales</h2>
    <ul>
      <li>Listado de libros con navegación por rutas.</li>
      <li>Formulario para ingresar nuevos libros al catálogo.</li>
      <li>Vista de detalle con edición de stock.</li>
      <li>Persistencia de información usando Local Storage y Session Storage.</li>
      <li>Interfaz modular basada en componentes de Vue 3.</li>
    </ul>

    <p class="mt-4 mb-0">
      Este proyecto forma parte del Módulo 6 y está orientado a consolidar buenas
      prácticas en desarrollo web moderno con JavaScript y Vue.
    </p>
  </section>
</template>

<style scoped>
.about {
  max-width: 900px;
  color: #1f2937;
  line-height: 1.6;
}

h1,
h2 {
  color: #144e70;
  font-weight: 700;
}

ul {
  padding-left: 1.2rem;
}

li {
  margin-bottom: 0.45rem;
}
</style>