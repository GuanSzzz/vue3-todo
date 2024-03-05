<template>
  <div>
    <!-- 新增了 data- 的前缀，确保只在当前组件生效。 -->
    <div data-v-5858="">todolist</div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else></div>
    <div>
      全选<input type="checkbox" v-model="allDone" />
      <span>{{ active }}/{{ all }}</span>
    </div>
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
    function addTodo() {
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
    return { title, todos, addTodo, clear, active, all, allDone }
  }
let { title, todos, addTodo, clear, active, all, allDone }=useTodos()
</script>

<style scoped>
div[data-v-5858] {
    color:red
}
</style>
