import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import { constantRoutes } from './baseUrl'
import { home } from './modules/home'

const createRouter = () =>
  new Router({
    mode: 'hash',
    scrollBehavior: (to, from, savedPosition) =>
      savedPosition || {
        x: 0,
        y: 0
      },
    routes: [home, ...constantRoutes]
  })

const router = createRouter()

/**
 * 重置路由
 * */
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

// 解决路由跳转相同地址chrome报错：NavigationDuplicated
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
