import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 手机端调试工具,正式需要注解
// import Vconsole from 'vconsole'
// new Vconsole()

// 按需引入插件插件
import './plugins/vant' // 按需加载vant组件

import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// css
import '@/assets/styles/variables.less'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/assets/icons/iconfont.css'
import '@/assets/styles/index.less'

// h5响应式js
import 'lib-flexible/flexible.js'

// 全局常量及方法
import * as global from './libs/global'
Vue.prototype.$g = global
// 注册公有组件
import myComponents from './components'
Vue.use(VueQuillEditor)
Vue.use(myComponents)
Vue.config.productionTip = false

// 路由钩子
import './routerBefore'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

