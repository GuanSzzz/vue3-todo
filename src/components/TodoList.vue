<template>
  <div>
    <!-- 新增了 data- 的前缀，确保只在当前组件生效。 -->
    <div data-v-5858="">todolist</div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <!-- 在 v-for 渲染列表的场景之下，我们使用 transition-group 组件去包裹元素，通过 tag 属性去指定渲染一个元素 -->
      <transition-group name="flip-list" tag="ul">
        <li v-for="todo in todos" :key="todo.title">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
        </li>
      </transition-group>
    </ul>
    <div v-else></div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span>{{ active }}/{{ all }}</span>
    </div>
    <!-- 提示动画 -->
    <transition name="modal" mode="">
      <div v-if="showModal" style="color: red; width: 200px; height: 70px; background: greenyellow">
        哥，别敲了，你没输
      </div>
    </transition>
    <!-- s删除图标动画 -->
    <transition-group name="flip-list" tag="ul">
      <li v-for="(todo, i) in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }"> {{ todo.title }}</span>
        <span class="remove-btn" @click="removeTodo($event, i)"> ❌ </span>
      </li>
    </transition-group>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
// 把所有逻辑封装到一个函数里，向外暴露定义的字段，计算属性
function useTodos() {
  let title = ref('')
  let todos = ref([
    {
      title: '学习vue',
      done: false
    }
  ])
  let showModal = ref(false)

  function addTodo() {
    if (!title.value) {
      showModal.value = true
      setTimeout(() => {
        showModal.value = false
      }, 1500)
      return
    }
    todos.value.push({
      title: title.value,
      done: false
    })
    title.value = ''
  }

  function clear() {
    todos.value.filter((v) => !v.done)
  }

  let active = computed(() => {
    return todos.value.filter((v) => !v.done).length
  })
  let all = computed(() => {
    return todos.value.length
  })

  let allDone = computed({
    get: function () {
      return (active.value = 0)
    },
    set: function () {
      todos.value.forEach((todo) => {
        todo.done = value
      })
    }
  })

  return { title, todos, addTodo, clear, active, all, allDone, showModal }
}
let { title, todos, addTodo, clear, active, all, allDone, showModal } = useTodos()
// 删除
function removeTodo(e, i) {
  todos.value.splice(i, 1)
}
</script>

<style scoped>
div[data-v-5858] {
  color: red;
}

.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.3s ease;
}
.flip-list-move {
  transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
