<template>
    <div :class="`task $(task.done ? 'is-complete' : '')`">
        <div class="content">{{ task.content }}</div>
        <v-btn @click="toggleDone">{{ task.done ? 'Deshacer' : 'Completada' }}</v-btn>
        <v-btn class="delete-btn" @click="removeTask">Eliminar</v-btn>
    </div>
</template>

<script>
export default {
    props: ['task'],
    methods: {
        toggleDone(task) {
            this.$store.commit('TOGGLE_TASK', this.task)
        },
        removeTask(task) {
            this.$store.commit('REMOVE_TASK', this.task)
        }
    }
}
</script>

<style>

</style>