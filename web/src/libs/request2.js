import axios from 'axios'

// 创建axios实例
if (process.env.NODE_ENV == 'development') { // 测试用
  axios.defaults.baseURL = 'http://localhost:8085'
} else {
  axios.defaults.baseURL = '/node'
}
const service2 = axios.create({
  timeout: 10000 // 请求超时时间
})

export default service2
