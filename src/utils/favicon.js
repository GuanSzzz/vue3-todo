import { ref, watch } from 'vue'
// 更换网页图标
export default function useFavicon(newIcon) {
  // 接受新的图标
  const favicon = ref(newIcon)
  // 更换图标
  const updateIcon = (icon) => {
    document.head.querySelectorAll(`link[rel*="icon"]`).forEach((el) => (el.href = `${icon}`))
  }
  // 重置？？？疑问
  const reset = (favicon.value = '/favicon.ico')
  // 监听图标变化，调用更新函数
  watch(favicon, (newVal) => {
    updateIcon(newVal)
  })

  return { favicon, reset }
}
