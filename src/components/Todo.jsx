import { defineComponent, ref } from 'vue'
// 类型注释只能在ts文件中
// interface Todo {
//     title: string,
//     done: boolean
// }
// let todos:Ref<Todo[]>=ref([{title: 'xxx',done: true}])
export default defineComponent({
    setup(props) {
        let title = ref('')
        let todos = ref([
            {
                title: '学习vue',
                done: true
            },
            {
                title: '睡觉',
                done: false
            }
        ])

        function addTodo() {
            todos.value.push({
                title: title.value
            })
            title.value = ''
        }

        return () => (
            <div>
                <input type="text" vModel={title.value} />
                <button onClick={addTodo}>onClick</button>
                <ul>
                    {todos.value.length ? (
                        todos.value.map((item) => {
                            return <li>{item.title}</li>
                        })
                    ) : (
                        <li>no data</li>
                    )}
                </ul>
            </div>
        )
    }
})
