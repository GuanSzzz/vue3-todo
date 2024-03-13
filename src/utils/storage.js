import { watchEffect,ref } from "vue";

export function userStorage(name,value='') {
    const loaclValue=localStorage.getItem(name);
    const data=ref(loaclValue?JSON.parse(loaclValue):'');
    if(value) {
        data.value=value;
    }
    watchEffect(()=> {
        localStorage.setItem(name, JSON.stringify(data.value));
    })
    return data
}