<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  props: {
    type: {
      type: String,
      validator(value) {
        return ['active', 'done', 'pending', 'cancelled'].includes(value)
      },
    },
  },
  setup(props) {
    const classNameMap = {
      active: 'primary',
      cancelled: 'danger',
      done: 'primary',
      pending: 'warning',
    }
    const textMap = {
      active: 'Активен',
      cancelled: 'Отменен',
      done: 'Завершен',
      pending: 'Выполняется',
    }
    const text = ref(textMap[props.type])
    const className = ref(classNameMap[props.type])

    watch(props, (val) => {
      text.value = textMap[val.type]
      className.value = classNameMap[val.type]
    })
    return {
      text,
      className,
    }
  },
}
</script>
