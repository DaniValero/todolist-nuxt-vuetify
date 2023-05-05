<template>
  <div>
    <v-card>
      <v-card-title> Prueba técnica: To-do list </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :class="{ 'todo-done': item.done }"
          >
            <v-list-item-action>
              <v-checkbox
                :input-value="item.done"
                @input="updateItem(index, $event)"
              ></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              {{ item.text }}
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-text-field
          v-model="newItem"
          label="Añadir una nueva tarea"
          @keyup.enter="addItem"
        ></v-text-field>
        <v-btn @click="addItem">Crear</v-btn>
      </v-card-actions>
    </v-card>
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
      newItem: "",
    };
  },
  methods: {
    addItem() {
      this.items.push({
        text: this.newItem,
        done: false,
      });
      this.newItem = "";
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
