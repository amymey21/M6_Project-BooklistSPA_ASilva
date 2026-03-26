<template>
  <div class="contador container p-2 rounded">
    <h4> Stock: {{ stock }}</h4>
    <div class="d-grid d-md-block">
      <button type="button" class="btn btn-light" @click="incrementar">+</button>
      <button type="button" class="btn btn-light" @click="decrementar">-</button>
      <button type="button" class="btn btn-light" @click="resetear">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contador',
  props: {
    stock: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {
    }
  },
  // computed: {},
  methods: {
    incrementar() {
      this.$emit('incrementar');
    },
    decrementar() {
      this.$emit('decrementar');
    },
    resetear() {
      this.$emit('reset');
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