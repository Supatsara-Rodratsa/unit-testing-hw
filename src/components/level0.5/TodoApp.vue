<script setup>
import { ref } from 'vue';
const newTodo = ref('');
const todos = ref([
  {
    id: 1,
    text: 'Learn Vue.js 3',
    completed: false,
  },
]);

function addTodo() {
  todos.value.push({
    id: todos.value.length + 1,
    text: newTodo.value,
    completed: false,
  });
}
</script>
<template>
  <div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="{ completed: todo.completed }"
    >
      <input
        type="checkbox"
        data-test="todo-checkbox"
        v-model="todo.completed"
      />
      {{ todo.text }}
    </div>
    <div>
      <input type="text" data-test="new-todo-input" v-model="newTodo" />
      <button data-test="new-todo-btn" @click="addTodo()">Add</button>
    </div>
  </div>
</template>
<style scoped>
.completed {
  text-decoration: line-through;
}
button {
  height: 20px;
}
</style>
