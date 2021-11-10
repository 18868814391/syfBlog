import router from './router'
import store from './store'
// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 动态添加缓存路由
const setCachedRoutes = (route) => {
  setTimeout(() => {
    if (route.name && route.meta && route.meta.cache) {
      store.dispatch('auth/updateCachedRoutes', route.name)
    }
  }, 20)
}

router.beforeEach(async(to, from, next) => {
  // 设置网页标题
  store.commit('auth/SET_PATHADD', to.path)
  document.title = to.meta.title
  setCachedRoutes(to)
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})
