/**
 * 首页
 */
const home = {
  path: '/',
  // redirect: '/login',
  meta: {
    cache: false,
    title: ''
  },
  component: () => import(/* webpackChunkName:"index"*/ '_views/home/index.vue')
}

export { home }
