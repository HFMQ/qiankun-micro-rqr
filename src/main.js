import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


let instance = null;

function render(props) {
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

// 没有父应用  独自开启运行子应用
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
if (window.__POWERED_BY_QIANKUN__) { // 动态添加publicPath
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}
export async function bootstrap(props) {
  console.log('hf', 'fdev 全局变量 方法初始化');
}

export async function mount(props) {
  render(props)
  console.log('hf', '挂载fdev rqr应用 ing');
}

export async function unmount(props) {
  instance.$destroy();
  console.log('hf', '销毁fdev rqr 应用');
}