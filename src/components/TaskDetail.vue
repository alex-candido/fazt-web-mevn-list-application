<template>
  <h1>Task detail</h1>

  <form action="">
    <input type="text" v-model="currentTask.title">

    <textarea rows="3" v-model="currentTask.description"></textarea>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Task } from '../interfaces/Task';
import { getTask } from '../services/TaskService';

export default defineComponent({
  data() {
    return {
      currentTask: {} as Task
    }
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTask(id);
      this.currentTask = res.data
    }
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
})
</script>
