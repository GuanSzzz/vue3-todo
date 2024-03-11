<template>
    <component :is="comp"></component>
</template>
<script setup>

import {computed } from 'vue'
import { useRouter } from '../grouter/index'

let router = useRouter()

const comp = computed(()=>{
    // 匹配对应的组件和路径
    const route = router.routes.find(
        (route) => route.path === router.current.value
    )
    // 如果匹配上就展示，匹配不上就为Null
    return route?route.component : null
})
</script>./index