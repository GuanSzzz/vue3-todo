<template>
  <h3>这个是首页</h3>
  <!-- <div>
    <h3>===封装的方法可以在任意地方使用</h3>
    <h4>这是鼠标x坐标：{{ x }} 这是鼠标y坐标：{{ y }}</h4>
  </div> -->
  <div>
    <h3>===封装的组件</h3>
    <TodoList />
  </div>
  <!-- <div>
    <h3>===累加器，随机变换颜色，使用v-bind</h3>
    <SumNum />
  </div> -->
  <!-- <div>
    <h3>===更换图标</h3>
    <ChangeIcon />
  </div> -->
  <!-- <div>
    <h3>===使用工具vueUse</h3>
    <h1 @click="toggle">点击变全屏</h1>
  </div> -->
</template>
<script setup>
// 引入工具
// import { useFullscreen } from '@vueuse/core'
import TodoList from '../components/TodoList.vue'
// import SumNum from '../components/SumNum.vue'
// import ChangeIcon from '../components/ChangeIcon.vue'

// 封装的方法可以在任意地方使用,只需引入即可
// import { useMouse } from '../utils/mouse'

// let { x, y } = useMouse()
// 使用工具  
// const { isFullscreen, enter, exit, toggle } = useFullscreen()
</script>
