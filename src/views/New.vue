<template>
  <form class="card" @submit.prevent="create">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button :disabled="!isValid" class="btn primary">Создать</button>
  </form>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup() {
    const router = useRouter()
    const store = useStore()
    // const store = useStore()
    const title = ref('lern react')
    const date = ref(null)
    const description = ref('some some')

    const isValid = computed(() => {
      return title.value && date.value && description.value !== ''
    })

    const create = () => {
      const data = {
        title: title.value,
        date: new Date(date.value).setHours(23, 59, 59, 999),
        description: description.value,
        id: Date.now(),
        status: 'active',
      }

      store.dispatch('createTask', data)
      router.push('/tasks')
    }

    return {
      isValid,
      title,
      date,
      description,
      create,
    }
  },
}
</script>
