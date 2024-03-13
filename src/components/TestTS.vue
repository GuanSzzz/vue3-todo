<script setup lang='ts'>
import { ref ,reactive,computed} from 'vue'



interface 极客时间课程 {  
     name:string,   
     price:number
    }
const msg = ref('') //  根据输入参数推导字符串类型
const msg1 = ref<string>('') //  可以通过范型显示约束

const obj = reactive({})
const course = reactive<极客时间课程>({name: '玩转Vue3全家桶', price: 129})

const msg2 = computed(() => '') // 默认参数推导
const course2 = computed<极客时间课程>(() => {  return {name: '玩转Vue3全家桶', price: 129}})
 

const props = defineProps<{
  title: string
  value?: number
}>()
const emit = defineEmits<{ 
  (e: 'update', value: number): void
}>()
 
</script>
 
<template>
  
  
</template>
 
<style>
  
</style>