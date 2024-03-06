<template>
  <div :style="fontstyle">
    <!-- 插槽 -->
    <slot></slot>
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontwidth">
        <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
      </span>
    </div>
  </div>
  <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5">⭐</span>
</template>

<script setup>
import { defineProps, computed,ref,defineEmits } from 'vue'
// 接受父组件传值
let props = defineProps({
  modelValue: Number,
  theme: { type: String, default: 'orange' }
})
console.log(props)
const themeObj = {
  black: '#00',
  white: '#fff',
  red: '#f5222d',
  orange: '#fa541c',
  yellow: '#fadb14',
  green: '#73d13d',
  blue: '#40a9ff'
}
const fontstyle = computed(() => {
  return `color:${themeObj[props.theme]};`
})

//评分宽度
let width = ref(props.value)
function mouseOver(i) {
  width.value = i
}
function mouseOut() {
  width.value = props.value
}
const fontwidth = computed(() => `width:${width.value}em;`)


// 子像父组件传递 
// let emits = defineEmits(['update-rate'])  使用value
let emits = defineEmits(['update:modelValue',num])   //使用v-model
function onRate(num) {
emits('update-rate',num)
console.log(7777,num);
}
</script>


<style scoped>
.rate {
  position: relative;
  display: inline-block;
}
.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>
