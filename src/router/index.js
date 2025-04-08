import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        redirect: '/beginner/helloWorld'
    }, {
        path: '/beginner/helloWorld',
        name: 'helloWorld',
        component: () => import('@/views/beginner/helloWorld.vue')
    }, {
        path: '/beginner/entities',
        name: 'beginnerEntities',
        component: () => import('@/views/beginner/entities.vue')
    }]
})