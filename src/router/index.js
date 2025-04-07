import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'helloWorld',
        component: () => import('../views/helloWorld.vue')
    }]
})