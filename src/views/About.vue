<template>
  <div>
    <h1>This is an about page</h1>
  </div>
  <div>
    <h3>===通过组件 渲染星星</h3>
    <Rate :value="score" theme="red" @update-rate="update">
    使用插槽：美团评分
    </Rate>
    <h3>你的评分是{{ score }}</h3>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Rate from '../components/Rate.vue'
let score = ref(3.5)
function update(num) {
  score.value = num
}
</script>

<style></style>
