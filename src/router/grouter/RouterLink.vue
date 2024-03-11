<template>
    <a :href="'#'+props.to">
        <slot />
    </a>
</template>

<script setup>
import {defineProps} from 'vue'
let props = defineProps({
    // 接受要跳转的路径
    to:{type:String,required:true}
})

</script>