<template>
  <h1>Task list</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Task } from '../interfaces/Task';
import { getTasks } from '../services/TaskService';

export default defineComponent({
  data() {
    return {
      tasks: [] as Task[]
    }
  },
  methods: {
    async loadtasks() {
      const res = await getTasks();
      this.tasks = res.data;
    }
  },
  mounted() {
    this.loadtasks()
  }
})
</script>
