<script setup>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue'

const username = ref('');
</script>

<template>
  <Navbar :username="username" />
  <RouterView v-slot="{ Component }">
    <component :is="Component" v-model:username="username" />
  </RouterView>
</template>

<style scoped></style>
