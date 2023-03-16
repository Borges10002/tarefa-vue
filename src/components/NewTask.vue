<template>
  <div>
    <b-card-body>
      <b-form-group
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label="Titulo*"
          label-for="nested-titulo"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-col sm="4">
            <b-form-input
              id="nested-titulo"
              placeholder="Titulo da tarefa"
              v-model="title"
              :maxlength="maxTitle"
              :state="titleState"
            ></b-form-input>
            <b-form-invalid-feedback id="nested-titulo">
              Obrigatório 10 caracteres
            </b-form-invalid-feedback>
          </b-col>
        </b-form-group>

        <b-form-group
          label="Descrição1*:"
          label-for="nested-descricao1"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-col sm="8">
            <b-form-input
              id="nested-descricao1"
              placeholder="Nova Tarefa 1"
              v-model="descricao1"
              :maxlength="maxDescricao1"
              :state="descricao1State"
            ></b-form-input>
            <b-form-invalid-feedback id="nested-titulo">
              Obrigatório 20 caracteres
            </b-form-invalid-feedback>
          </b-col>
        </b-form-group>

        <b-form-group
          label="Descrição2:"
          label-for="nested-descricao2"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-col sm="10">
            <b-form-input
              id="nested-descricao2"
              placeholder="Nova Tarefa 2"
              v-model="descricao2"
              :maxlength="maxDescricao2"
            ></b-form-input>
          </b-col>
        </b-form-group>

        <b-form-group
          label="Descrição3"
          label-for="nested-descricao3"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-col sm="10">
            <b-form-input
              id="nested-descricao3"
              @keydown.enter="add"
              placeholder="Nova Tarefa 3"
              v-model="descricao3"
              :maxlength="maxDescricao3"
            ></b-form-input>
          </b-col>
        </b-form-group>
      </b-form-group>

      <b-form-group label-cols-sm="8" label-align-sm="right">
        <b-button variant="outline-dark" @click="add">Adicionar</b-button>
      </b-form-group>
    </b-card-body>
  </div>
</template>

<script>
export default {
  computed: {
    titleState() {
      return this.title.length > 9 ? true : false;
    },
    descricao1State() {
      return this.descricao1.length > 9 ? true : false;
    },
  },
  data() {
    return {
      maxTitle: 30,
      maxDescricao1: 30,
      maxDescricao2: 50,
      maxDescricao3: 60,

      descricao1: "",
      descricao2: "",
      descricao3: "",
      data: "",
      title: "",
    };
  },

  methods: {
    add() {
      this.data = new Date().toLocaleString();

      this.$emit("taskAdded", {
        descricao1: this.descricao1,
        descricao2: this.descricao2,
        descricao3: this.descricao3,
        data: this.data,
        title: this.title,
      });
      this.descricao1 = "";
      this.descricao2 = "";
      this.descricao3 = "";
      this.title = "";
    },
  },
};
</script>

<style></style>
