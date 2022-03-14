<template>
  <b-col md="4">
    <b-card
      header-tag="header"
      footer-tag="footer"
      border-variant="primary"
      header="Primary"
      header-bg-variant="primary"
      header-text-variant="white"
      footer-bg-variant="success"
      footer-border-variant="dark"
      @click="$emit('taskStateChanged', task)"
      class="task"
      :class="stateClass"
    >
      <template #header>
        <h6 class="mb-0">
          {{ task.title }}
          <span @click.stop="$emit('taskDeleted', task)" class="close">x</span>
        </h6>
      </template>

      <b-card-text>{{ task.descricao1 }}</b-card-text>
      <b-card-text>{{ task.descricao2 }}</b-card-text>
      <b-card-text>{{ task.descricao3 }}</b-card-text>

      <template #footer>
        <em>{{ task.data }}</em>
      </template>
    </b-card>

  </b-col>
</template>

<script>
export default {
  props: {
    task: { type: Object, required: true },
  },

  data() {
    return {};
  },

  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending,
      };
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 10px;
  height: 260px;
}

.done {
  color: rgb(36, 34, 163);
  border-left: 12px solid #52088f;
  background-color: #a1a8a1;
  text-decoration: line-through;
}

.pending .close {
  color: black;
  background-color: #b0f50f;
}

.done .close {
  color: black;
  background-color: white;
}

.close {
  position: absolute;
  right: 1px;
  top: 1px;
  font-size: 0.9rem;
  font-weight: 900;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}
</style>
