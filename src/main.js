import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
// import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
// import router from './router/index'

import "./api/mock.js"
// 引入通用样式
import store from "@/store"
import "@/styles/common.scss"
// import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false
Vue.use(ElementUI);
// 定义懒加载图片或者文件等，自定义指令
Vue.directive('lazy', (el, binding) => {
  console.log(el,binding);
  let oldSrc = el.src //保存旧的src，方便后期渲染时候赋值src真实路径
  console.log(oldSrc);
  el.src = "" //将渲染的src赋为空，则不会渲染图片出来
  let observer = new IntersectionObserver(([{ isIntersecting }]) => { // 调用方法得到该elDOM元素是否处于可视区域
    console.log(isIntersecting);
    if (isIntersecting) { //回调是否处于可视区域，true or false
      el.src = oldSrc //如果处于可视区域额，将最开始保存的真实路径赋予DOM元素渲染
      observer.unobserve(el) // 只需要监听一次即可，第二次滑动到可视区域时候不在监听
    }
  })
  observer.observe(el) // 调用方法
})
// Vue.use(VueLazyload, {
// 	// preLoad: 1.3,
// 	error: '@/assets/img/search.png',
// 	loading: '@/assets/img/search.png',
	// attempt:
// router.beforeEach((to,form,next)=>{
//   const token = Cookies.get('token');
//   //     // token不存在，不能等于login，会出现死循环，因为点击登录按钮一瞬间就会生成token
// if(!token && to.name !=='Login'){
//   next({
//     name:"Login"
//   }
//     )
//     // token存在，但不能重复登
// }else if(token && to.name =='Login'){
//   next({
//     name:"home"
//   })
// }else{
//   // token不存在就继续下一步
//   next();
// }
// })

// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // router,
  store
}).$mount('#app')
