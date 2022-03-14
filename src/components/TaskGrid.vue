<template>
  <div>
    <template v-if="tasks.length">
      <b-row align-v="stretch">
        <Task
          v-for="(task, i) in tasks"
          :key="task.name"
          @taskDeleted="$emit('taskDeleted', i)"
          @taskStateChanged="(event) => $emit('taskStateChanged', event)"
          :task="task"
        ></Task>

      </b-row>

    </template>
    <p v-else class="no-task">Sua vida está em dia :)</p>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {

  components: { Task },
  props: {
    tasks: { type: Array, required: true },
  },

};
</script>

<style>
.no-task {
  color: white;
  font-size: 25px;
}
</style>
