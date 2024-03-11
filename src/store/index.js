import { createStore } from 'vuex'

// 实现一个迷你vuex的逻辑
// import { createStore } from './gvuex'

const store = createStore({
    state() {
        return {
            count: 7
        }
    },
    getters: {
        double(state) {
            return state.count * 2
        }
    },
// 同步修改
  mutations: {
        add(state) {
            state.count++
        }
    },
// 异步修改  action 并不是直接修改数据，而是通过 mutations 去修改，需要注意的。
  actions: {
        asyncAdd({ commit }) {
            setTimeout(() => {
                commit('add')
            }, 1000)
        }
    }
})

export default store