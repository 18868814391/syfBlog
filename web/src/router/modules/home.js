/**
 * 首页
 */
const home = {
  path: '/',
  meta: {
    cache: false,
    title: ''
  },
  component: () => import(/* webpackChunkName:"index"*/ '_views/home/index.vue')
}

export { home }
