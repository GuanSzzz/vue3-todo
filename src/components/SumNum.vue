<template>
    <div>
      <h1 @click="add">{{ count }}</h1>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  let count = ref(1)
//   定义样式变量
  let color = ref('red')
  function add() {
    count.value++
    color.value = Math.random()>0.5? "blue":"red"  //样式变量赋值
  }
  </script>
  
  <style scoped>
  h1 {
    color:v-bind(color);  
    /* 绑定变量，随机变化颜色 */
  }
  </style>