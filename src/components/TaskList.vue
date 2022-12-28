<template>
  <ul>
    <li 
      v-for="(task, index) in tasks"
      :key="index"
      @click="$router.push({path: `/tasks/${task._id}`})"
    >
      {{ task.title }}
    </li>
  </ul>
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
      console.log(res.data)
    }
  },
  mounted() {
    this.loadtasks()
  }
})
</script>
