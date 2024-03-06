import {ref,watchEffect} from 'vue'
// 同步到本地
export default function useStorage(name,value=[]) {
    // 如果本地有取本地，本地没有取传进来
    let data=ref(JSON.parse(localStorage.getItem(name)||value));
    // 监听到变化，再存到本地
    watchEffect(() => {
        localStorage.setItem(name,JSON.stringify(data.value));
    })
    return data;
}