export const state = () => ({
    tasks: []
})

//CRUD de la lista de tareas actualizando el estado

export const mutations = {
    ADD_TASK(state, task) {
        state.tasks =[{content: task, done: false}, ...state.tasks]
    },

    REMOVE_TASK(state, task) {
        state.tasks.splice(state.tasks.indexOf(task), 1)
    },
    TOGGLE_TASK(state, task) {
        task.done = !task.done
    }
}
