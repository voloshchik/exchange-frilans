import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      tasks: [],
    }
  },
  mutations: {
    createTask(state, task) {
      console.log('task', task)
      state.tasks.push(task)
    },
  },
  actions: {
    createTask(context, task) {
      context.commit('createTask', task)
    },
  },
  getters: {
    tasks(state) {
      return state.tasks
    },
    activeTaskCount(state) {
      return state.tasks.filter((t) => t.active).length
    },
    taskById(_, getters) {
      return (id) => getters.tasks.find((t) => t.id == id)
    },
  },
})
