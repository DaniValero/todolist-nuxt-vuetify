<template>
  <div>
    <v-card>
      <v-card-title> Prueba técnica: To-do list | Nuxtjs & Vuetify</v-card-title>
      <v-card-actions>
        <v-text-field
          class="text-input"
          v-model="newTask"
          label="Añadir una nueva tarea"
          @keyup.enter="addTask()"
        ></v-text-field>
        <v-btn color="info" class="addtask-button" @click="addTask()">Crear</v-btn>
      </v-card-actions>
    </v-card>
        <v-list class="task-list">
          <Task
            v-for="(task) in $store.state.tasks"
            :key = "task.id_task"
            :task = "task" 
            class="task-list"/>
        </v-list>
  </div>
</template>

<script>

export default {
  async created() {
    this.$store.dispatch("fetchTasks");
  },
  data() {
    return {
      newTask: ""
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.dispatch("addTask", this.newTask)
        this.newTask = ""
      }
    }
  },
};
</script>

<style>
.text-input {
  margin-left: 10px;
}

.addtask-button {
  margin-left: 25px;
}
.is-complete {
  text-decoration: line-through;
}

.task-list {
  margin: 10px auto;
}

</style>