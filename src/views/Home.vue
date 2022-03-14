<template>
  <div class="home">
    <NabBar @clicou="(descricao) => carregarFiltro(descricao)" />
    <h1>Tarefas</h1>

    <b-container fluid style="margin-bottom: 36px;">
      <TaskProgress :progress="progress" />

      <br />
      <TaskGrid
        @taskDeleted="deleteTask"
        @taskStateChanged="toggleTaskState"
        :tasks="lists"
      />

      <div class="overflow-auto">
        <b-pagination
          :total-rows="totalRows"
          v-model="currentPage"
          :per-page="perPage"
        />
      </div>
    </b-container>



    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NabBar from "@/components/views/NabBar.vue";
import Footer from "@/components/views/Footer.vue";

import TaskProgress from "../components/TasksProgress.vue";
import TaskGrid from "../components/TaskGrid.vue";

export default {
  name: "Home",
  components: {
    NabBar,
    Footer,
    TaskProgress,
    TaskGrid,
  },

  data() {
    return {
      tasks: [],
      totalRows: 0,
      currentPage: 1,
      perPage: 3,
    };
  },
  /*
  watch: {
    tasks: {
      deep: true,
      teste() {
        setInterval(() => {
          const json = localStorage.getItem("tasks");
          const array = JSON.parse(json);
          this.tasks = array.filter((item) => item.pending === true);
        }, 1000);
      },
    },
  },
  */

  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter((t) => !t.pending).length;
      return Math.round((done / total) * 100) || 0;
    },

    lists() {
      return this.tasks.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    },

  },

  mounted() {
     this.totalRows = this.tasks.length;
  },

  methods: {
    carregarFiltro(descricao) {
      if (descricao) {
        const json = localStorage.getItem("tasks");
        const array = JSON.parse(json);
        this.tasks = array.filter((item) => item.title === descricao);
      } else {
        const json = localStorage.getItem("tasks");
        const array = JSON.parse(json);

        this.tasks = Array.isArray(array)
          ? array.sort(function compare(a, b) {
              if (a.pending > b.pending) {
                return -1;
              }
              if (a.pending < b.pending) {
                return 1;
              }
              return 0;
            })
          : [];
      }
    },

    deleteTask(i) {
      this.tasks.splice(i, 1);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },

    toggleTaskState(taskS) {
      let IFound = this.tasks.findIndex(
        (task) => task.data === taskS.data && task.title === taskS.title
      );
      this.tasks[IFound].pending = !this.tasks[IFound].pending;
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },

  created() {
    const json = localStorage.getItem("tasks");
    const array = JSON.parse(json);

    this.tasks = Array.isArray(array)
      ? array.sort(function compare(a, b) {
          if (a.pending > b.pending) {
            return -1;
          }
          if (a.pending < b.pending) {
            return 1;
          }
          return 0;
        })
      : [];
  },
};
</script>

<style scope>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

div h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
  color: #fff;
}
</style>
