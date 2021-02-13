<template>
  <div class="card">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button @click="setStatus('pending')" class="btn">Взять в работу</button>
      <button @click="setStatus('done')" class="btn primary">Завершить</button>
      <button @click="setStatus('cancelled')" class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center">Задачи с id = <strong>Tут АЙДИ</strong> нет.</h3>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
  components: { AppStatus },
  setup() {
    const route = useRoute()
    const store = useStore()
    const id = route.params.id
    const task = computed(() => store.getters.taskById(id))

    const setStatus = (status) => {
      // eslint-disable-next-line no-unused-vars
      const updated = { ...task.value, status }
      console.log('updtaskated', task)
      store.dispatch('changeTask', updated)
    }
    return {
      task,
      setStatus,
    }
  },
}
</script>

<style scoped></style>
