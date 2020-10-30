// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'

// createRouter 创建路由实例
const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('../layout/Layout.vue'),
            children: [
                {
                    path: 'home2',
                    name: 'home2',
                    component: () => import('../views/Home.vue')
                }
            ]
        },
        {
            path: '/uiElement',
            component: () => import('../layout/Layout.vue'),
            children: [
                {
                    path: 'button',
                    name: 'button',
                    component: () => import('../views/Button.vue')
                },
                {
                    path: 'card',
                    name: 'card',
                    component: () => import('../views/Card.vue')
                },
                {
                    path: 'grid',
                    name: 'grid',
                    component: () => import('../views/Grid.vue')
                },
                {
                    path: 'table',
                    name: 'table',
                    component: () => import('../views/Table.vue')
                }
            ]
        }
    ]
})

// 抛出路由实例, 在 main.js 中引用
export default router