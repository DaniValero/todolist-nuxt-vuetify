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
    },
    SET_TASKS(state, tasks) {
        state.tasks = tasks
    }
}

// Consumir API

export const actions = {
    async fetchTasks({ commit }) {
        try {
            const response = await fetch('http://localhost:5000/tasks/get');
            const tasks = await response.json();
            console.log(tasks)
            commit("SET_TASKS", tasks);

        } catch (error) {
            console.error(error);
        }
    },
    async addTask({ commit }, task) {
        console.log(task)
        try {
            await fetch('http://localhost:5000/tasks/new-task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: task,
                    done: false
                })
            });
            commit('ADD_TASK', task)
    
        } catch (error) {
            console.error(error);
        }
    },
    async toggleTask({ commit }, task) {

        try {
            
            const response = await fetch(`http://localhost:5000/tasks/update/${task.id_task}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({done: !task.done})
            })
            const toggledTask = await response.json();
            commit('TOGGLE_TASK', task)
            
        } catch (error) {
            console.error(error);
        }
    },
    async removeTask({ commit }, task) {
        console.log(task);
        try {
            await fetch(`http://localhost:5000/tasks/delete/${task.id_task}`, {
                method: 'DELETE',
            })
            commit('REMOVE_TASK', task)
        } catch (error) {
            console.error(error);
        }
    }    

}