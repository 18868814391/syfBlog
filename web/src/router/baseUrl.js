/**
 * 初始路由
 */
const errorPages = [{
  path: '/404',
  meta: {
    title: '找不到页面'
  },
  component: () => import(/* webpackChunkName:"error"*/ '_views/error-page/404.vue')
}]

export const constantRoutes = [
  ...errorPages,
  {
    path: '*',
    redirect: '/404'
  }
]
