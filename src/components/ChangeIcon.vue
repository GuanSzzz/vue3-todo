<script setup>
import useFavicon from '../utils/favicon.js'
let {favicon}  = useFavicon()
function loading(){
    console.log(111);
  favicon.value = '/geek.png'
}
</script>

<template>
 <button @click="loading">123</button>
</template>