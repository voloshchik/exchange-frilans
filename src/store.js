import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      tasks: [],
    }
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
    },
    changeTask(state, update) {
      const { id } = update
      const idx = state.tasks.findIndex((t) => t.id == id)
      state.tasks[idx] = update
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
