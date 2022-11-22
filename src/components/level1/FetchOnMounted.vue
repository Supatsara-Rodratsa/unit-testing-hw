<script setup>
// TODO: TDD Exercise: complete the implementation of this component
// to pass all the tests defined in its companion .test.js file

import { ref, onMounted } from 'vue';
const response = ref({});
const error = ref(false);
const loaded = ref(false);
onMounted(async () => {
  try {
    const res = await fetch('https://yesno.wtf/api');

    if (res.ok) {
      loaded.value = true;
      response.value = await res.json();
    } else {
      error.value = true;
    }
  } catch (e) {
    error.value = true;
  }
});
</script>

<template>
  <img v-if="loaded" :src="response.image" alt="image from api" />
  <div v-else>loading</div>
  <div v-if="error">error</div>
</template>
