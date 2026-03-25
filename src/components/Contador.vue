<template>
  <div class="contador container p-2 rounded">
    <h4>Contador: {{ contador }}</h4>
    <div class="d-grid d-md-block">
      <button class="btn btn-light" @click="incrementar">+</button>
      <button class="btn btn-light" @click="decrementar">-</button>
      <button class="btn btn-light" @click="resetear">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contador',
  // props: {},
  data: function () {
    return {
      contador: 0
    }
  },
  // computed: {},
  methods: {
    incrementar() {
      this.contador++;
    },
    decrementar() {
      this.contador--;
    },
    resetear() {
      this.contador = 0;
    }
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>

<style scoped>
.contador {
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 1rem;
  background-color: #57a1a3;
  color: white;
}
</style>