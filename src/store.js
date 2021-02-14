import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      tasks: JSON.parse(localStorage.getItem('my-tasks')) ?? [],
    }
  },
  mutations: {
    createTask(state, task) {
      if (task.date < new Date()) {
        task.status = 'cancelled'
      }
      state.tasks.push(task)
      localStorage.setItem('my-tasks', JSON.stringify(state.tasks))
    },
    changeTask(state, update) {
      const { id } = update
      const idx = state.tasks.findIndex((t) => t.id == id)
      state.tasks[idx] = update
      localStorage.setItem('my-tasks', JSON.stringify(state.tasks))
    },
  },
  actions: {
    createTask(context, task) {
      context.commit('createTask', task)
    },
    changeTask(context, update) {
      context.commit('changeTask', update)
    },
  },
  getters: {
    tasks(state) {
      return state.tasks
    },
    activeTaskCount(state) {
      return state.tasks.filter((t) => t.status === 'active').length
    },
    taskById(_, getters) {
      return (id) => getters.tasks.find((t) => t.id == id)
    },
  },
})
