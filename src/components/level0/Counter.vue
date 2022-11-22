<script setup>
import { ref } from 'vue';
const count = ref(0);
function increment() {
  count.value++;
}
</script>

<template>
  <p class="paragraph" data-testid="counter">Times clicked: {{ count }}</p>
  <button @click="increment">increment</button>
</template>
