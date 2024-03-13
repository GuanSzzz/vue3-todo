import request from './index'
import {userStorage} from '../utils/storage'
export const login=(body) => {
    request.post('/api/login', body).then(res=> {
        userStorage('token',res.data)
        return res 
    })
}
export const getInfo=() => request.get('/api/get')