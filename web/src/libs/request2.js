import axios from 'axios'
import { Toast } from 'vant'
import { debounce } from './global'
import store from '@/store'
import StoreLocal from 'storejs'
/**
 * 思路剖析
 * 基础设置 baseURL timeout等
 * 设置请求头 Authorization
 * 过滤响应数据 response.data
 * 处理异常 data.success
 * 过滤重复请求 cancelToken
 */
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL2,
  timeout: 120 * 1000
})

/**
 * 错误消息提示组件
 */
export const showErrorMsg = debounce(
  function(msg) {
    Toast.fail(msg)
  })

/**
 * 请求队列
 * @description 全局过滤恶意频繁请求，登出清空队列
 */
const pendings = []

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  config => {
    // 过滤重复请求
    clearPending(config)

    // // 设置请求token
    // store.getters.token && (config.headers['Authorization'] = store.getters.token)
    config.headers['Authorization'] = StoreLocal.get('token') || ''
    config.headers['nodeid'] = StoreLocal.get('nodeId') || 5
    // 获取取消请求方法
    config.cancelToken = new axios.CancelToken(cancel => {
      pendings.push({ url: getUrl(config), cancel })
    })

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 异常码
 * 1、判定为成功的白名单code列表
 * 2、需重定向的code列表
 */
const whiteList = ['200']
// const redirectCode = [700, '700'] // token失效的情况需重定向至登录页面
// const ridrectCode = ['600', '601', '605', '612', '614']

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  response => {
    const { data, config } = response

    // 在请求完成后，自动移出队列
    setTimeout(clearPending, 0, config)

    if (whiteList.includes(data.code)) {
      return data
    } else {
      let msg = data.message || '系统异常'
      showErrorMsg(msg)
      return Promise.reject(msg)
    }
  },
  error => {
    if (axios.isCancel(error)) {
      console.log(error.message)
      return Promise.reject()
    }

    const { config, response } = error

    // 在请求完成后，自动移出队列
    setTimeout(clearPending, 0, config)

    let msg = response ? '系统开小差了，请联系管理人员！' : '您的网络不稳定，请检查后重试！'
    showErrorMsg(msg)
    return Promise.reject(error)
  }
)

/**
 * 清除请求队列
 */
function clearPending(config, allCancel) {
  if (allCancel) {
    // 在全局路由守卫中引用 跳转前取消当前所有pending中的请求
    pendings.forEach(i => i.cancel(`${i.url} 请求被取消`))
  } else {
    const len = pendings.length
    const curUrl = len && getUrl(config)

    for (let i = 0; i < len; i++) {
      const { url, cancel } = pendings[i]

      if (url === curUrl) {
        cancel(`${config.url} 重复请求被取消！`)
        pendings.splice(i, 1)
        return
      }
    }
  }
}

// url + method + params 相同 被视为重复请求
function getUrl({ url, method, data, params }) {
  const query = data || params || {}
  const queryStr = JSON.stringify(query)

  return `${url}_${method}_${queryStr}`
}

export default service
