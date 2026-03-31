<template>
  <div class="contador container p-1 rounded">
    <h4> Stock: {{ modelValue }}</h4>
    <div class="m-1 d-flex  gap-2">
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
    modelValue: {
      type: Number,
      default: 0
    }
  },
  // data: function () {
  //   return {
  //   }
  // },
  // computed: {},
  methods: {
    incrementar() {
      this.$emit('update:modelValue', this.modelValue + 1);
    },
    decrementar() {
      if (this.modelValue > 0) {
        this.$emit('update:modelValue', this.modelValue - 1);
      }
    },
    resetear() {
      this.$emit('update:modelValue', 0);
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
h4 {
  font-size: medium;
  align-self: center;
}

.contador {
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: #77cbceb3;
  color: white;
}
</style>