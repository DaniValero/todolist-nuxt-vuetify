<template>
  <div>
    <v-card>
      <v-card-title> Prueba técnica: To-do list </v-card-title>
      <v-card-text>
      </v-card-text>
      <v-card-actions>
        <v-text-field
          v-model="newTask"
          label="Añadir una nueva tarea"
          @keyup.enter="addTask"
        ></v-text-field>
        <v-btn @click="addTask">Crear</v-btn>
      </v-card-actions>
    </v-card>
        <v-list>
          <Task
            v-for="(task, i) in $store.state.tasks"
            :key = "i"
            :task = "task" />
        </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: "Esto es una tarea", done: false },
        { text: "Prueba a añadir tus propias tareas", done: true },
        { text: "También puedes eliminarlas y editarlas", done: false },
      ],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit("ADD_TASK", this.newTask)
        this.newTask = ""
      }
    },
    updateItem(index, done) {
      this.items[index].done = done;
    },
    submitForm() {
      // Handle form input and API request here
      console.log("Name:", this.name);
      console.log("Email:", this.email);
      console.log("Message:", this.message);
    },
  },
};
</script>
