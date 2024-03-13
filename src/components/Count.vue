 
<template>
    累加器
  <div >{{ count }}</div>
  <button @click="add">+1</button>
  <button @click="asyncAdd">+1+1</button>
  
</template>

<script setup>
import { computed } from 'vue'
// 引入vuex
 import { useStore } from 'vuex';
 // 声明store
 let store=useStore()
 //  count 不是使用 ref 直接定义，而是使用计算属性返回了 store.state.count，也就是刚才在 src/store/index.js 中定义的 count。
 let count=computed(()=>{
   return store.state.count
 })
 // add 函数是用来修改数据，这里我们不能直接去操作 store.state.count +=1，因为这个数据属于 Vuex 统一管理，所以我们要使用 store.commit(‘add’) 去触发 Vuex 中的 mutation 去修改数据。
//  同步修改
 function add() {
    // 调用vuex的add函数
    store.commit('add')
 }
//  actions 的调用方式是使用 store.dispatch
//  异步修改
 function asyncAdd(){
    store.dispatch('asyncAdd')
}
//  在组件中使用 getters，把 double 处理和计算的逻辑交给 Vuex
 let double = computed(()=>store.getters.double)

// // 使用自己封装的迷你vuex
// import {useStore} from '../store/gvuex'
// let store =useStore()
// let count = computed(()=>store.state.count)
// function add(){
//     store.commit('add')
// }

</script>

 
<style>
  
</style>