<template>
  <div class="criar">
    <NabBar />
    <h1 class="titulo">Nova Tarefa</h1>

    <NewTask @taskAdded="addTask" />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NabBar from "@/components/views/NabBar.vue";
import Footer from "@/components/views/Footer.vue";

import NewTask from "../components/NewTask.vue";

import router from "../router";

export default {
  name: "Criar",
  components: {
    NabBar,
    Footer,
    NewTask,
  },


  data() {
    return {
      tasks: [],
    };
  },

  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter((t) => !t.pending).length;
      return Math.round((done / total) * 100) || 0;
    },
  },

  methods: {
    addTask(task) {
      if (task.descricao1.length > 0) {
        const sameName = (t) => (t.descricao1 + t.descricao2 + t.descricao3) === (task.descricao1 + task.descricao2 + task.descricao3);
        const reallyNew = this.tasks.filter(sameName).length == 0;
        if (reallyNew) {
          this.tasks.push({
            descricao1: task.descricao1,
            descricao2: task.descricao2,
            descricao3: task.descricao3,
            data: task.data,
            title: task.title,
            pending: task.pending || true,
          });

          localStorage.setItem("tasks", JSON.stringify(this.tasks));
          router.push({ name: "home" });
        }
      }
    },
  },

  created() {
    const json = localStorage.getItem("tasks");
    const array = JSON.parse(json);

    this.tasks = Array.isArray(array) ? array.sort() : [];
  },
};
</script>

<style scope>
.criar {
  font-family: "Lato", sans-serif;
  background: #fff;
  color: #fff;
  position: fixed;
  width: 100%;
  text-align: center;
  color: black;
}

.titulo {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
  color: black;
}
</style>
