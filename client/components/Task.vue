<template>
    <div class="task-wrapper">
        <div :class="`task ${task.done ? 'is-complete' : ''}`">
            <div class="content">{{ task.content }}</div>
        </div>
        <div class="button-wrapper">
            <v-btn color="info" @click="toggleDone();">{{ task.done ? 'Deshacer' : 'Completar'}}</v-btn>
            <v-btn color="error" @click="removeTask">Eliminar</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    props: ['task'],
    methods: {
        toggleDone(task) {
            this.$store.dispatch("toggleTask", this.task);
        },
        removeTask(task) {
            this.$store.dispatch("removeTask", this.task)
        }
    }
}
</script>

<style>
.task.is-complete .content {
    text-decoration: line-through;
}
.task-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 15px auto;
}
.content {
    margin-left: 15px;
    margin-top: 10px;
}
</style>