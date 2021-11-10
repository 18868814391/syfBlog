
import axios from 'axios'
// 创建axios实例
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = '/'
} else {
  axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
}
const service = axios.create({
  timeout: 10000 // 请求超时时间
})

export default service
