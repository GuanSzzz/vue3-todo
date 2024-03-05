// 封装的方法可以在任意地方使用
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)
  function updated(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', updated)
  })
// 组件卸载的周期
  onUnmounted(() => {
    window.removeEventListener('mousemove', updated)
  })
  return { x, y }
}
