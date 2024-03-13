import { defineComponent, h } from 'vue'

export default defineComponent({
    props: {
        level: {
            type: Number,
            required: true
        }
    },
    //   setup(props, { slots }) {
    //     return () => h(
    //       'h' + props.level, // 标签名
    //       {}, // prop 或 attribute
    //       slots.default() // 子节点
    //     )
    //   }
    // 在 JavaScript 里面写 HTML 的语法，就叫做 JSX
    setup(props, { slots }) { 
        const tag = 'h' + props.level 
       return () => <tag>{slots.default()}</tag>
     }
})