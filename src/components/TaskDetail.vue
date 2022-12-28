<template>
  <h1>Task detail</h1>

  <form @submit.prevent="handleUpdate()">
    <input type="text" v-model="currentTask.title">

    <textarea rows="3" v-model="currentTask.description"></textarea>

    <button>Update</button>
  </form>


  <button>Delete</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Task } from '../interfaces/Task';
import { getTask, updateTask } from '../services/TaskService';

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
    },
    async handleUpdate() {
      if (typeof this.$route.params.id === "string") {
        const res = await updateTask(this.$route.params.id, this.currentTask);
        console.log(res)
      }
    }
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
})
</script>
