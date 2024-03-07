<template>
  <div>
    <h1>This is an about page</h1>
  </div>
  <!-- <div>
    <h3>===通过组件 渲染星星</h3>
    <Rate :value="score" theme="red" @update-rate="update">
    使用插槽：美团评分
    </Rate>
    <h3>你的评分是{{ score }}</h3>
  </div> -->
  <div>
    <h3>===动画</h3>
    <ChangeBox/>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import ChangeBox from '../components/ChangeBox.vue'
// 评分逻辑==
// import Rate from '../components/Rate.vue'
// let score = ref(3.5)
// function update(num) {
//   score.value = num
// }
// 评分逻辑==
</script>

<style></style>
