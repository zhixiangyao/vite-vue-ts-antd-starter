import type { RouteRecordRaw } from 'vue-router'
import { FileWordOutlined, UnorderedListOutlined } from '@ant-design/icons-vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export const views = [
  {
    path: 'page-1',
    name: 'PageOne',
    title: 'PageOne',
    icon: () => h(FileWordOutlined),
    component: () => import('~/views/PageOne/index.vue'),
  },
  {
    path: 'page-2',
    name: 'PageTwo',
    title: 'PageTwo',
    icon: () => h(UnorderedListOutlined),
    component: () => import('~/views/PageTwo/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('~/layout/index.vue'),
      redirect: () => ({ name: views[0]?.name }),
      children: views.map<RouteRecordRaw>(view => ({
        path: view.path,
        name: view.name,
        component: view.component,
      })),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('~/views/NotFound.vue'),
    },
  ],
})

export default router
