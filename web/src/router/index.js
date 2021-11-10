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
    routes: [home, ...constantRoutes,
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login'),
        meta: {
          title: '登录', noAnima: true
        }
      },
      {
        path: '/register',
        name: 'register',
        component: () => import('@/views/login/register'),
        meta: {
          title: '注册', noAnima: true
        }
      },
      {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/blog/blog'),
        meta: {
          title: 'BLOG', noAnima: true, keepAlive: true
        }
      }, {
        path: '/readBlog',
        name: 'readBlog',
        component: () => import('@/views/blog/readBlog'),
        meta: {
          title: 'MyBLOG', noAnima: true
        }
      }, {
        path: '/blogUpload',
        name: 'blogUpload',
        component: () => import('@/views/blog/blogUpload'),
        meta: {
          title: 'BLOG上传', noAnima: true
        }
      },
      {
        path: '/read',
        name: 'read',
        component: () => import('@/views/novel/read'),
        meta: {
          title: '浏览', noAnima: true
        }
      },
      {
        path: '/readPage',
        name: 'readPage',
        component: () => import('@/views/novel/readPage'),
        meta: {
          title: '浏览', noAnima: true
        }
      },
      {
        path: '/readPage2',
        name: 'readPage2',
        component: () => import('@/views/novel/readPage2'),
        meta: {
          title: '浏览', noAnima: true
        }
      },
      {
        path: '/readPage3',
        name: 'readPage3',
        component: () => import('@/views/novel/readPage3'),
        meta: {
          title: '浏览', noAnima: true
        }
      }, {
        path: '/footprint',
        name: 'footprint',
        component: () => import('@/views/Interaction/footprint'),
        meta: {
          title: '留言板', noAnima: true
        }
      }, {
        path: '/boobBrand',
        name: 'boobBrand',
        component: () => import('@/views/Interaction/boobBrand'),
        meta: {
          title: '涂鸦板', noAnima: true
        }
      },
      {
        path: '/boobMore',
        name: 'boobMore',
        component: () => import('@/views/Interaction/boobMore'),
        meta: {
          title: '涂鸦板', noAnima: true
        }
      }
    ]
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
