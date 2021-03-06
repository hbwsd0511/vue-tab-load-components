import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history', // 访问路径不带井号  需要使用 history模式，才能使用 scrollBehavior
  base: '/page/app', // 配置单页应用的基路径
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/tab'], resolve), // 使用懒加载
      meta: {
        keepAlive: true // true 表示需要使用缓存
      }
    },
    {
      path: '/tab',
      component: resolve => require(['@/views/tab'], resolve), // 使用懒加载
      meta: {
        keepAlive: true // true 表示需要使用缓存  false表示不需要被缓存
      }
    }
  ]
});
export default router;
