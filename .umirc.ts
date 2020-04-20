import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: { antd: true }, //启动国际化
  layout: {},  //启动 Ant-Design Pro
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/products', component: '@/pages/products' }
  ],
});
