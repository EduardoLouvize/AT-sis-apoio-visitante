import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () => import('@/views/DestinationShow.vue'),
        props: true,
        children: [
            {
                path: ':experienceSlug',
                name: 'experience.show',
                component: () => import('@/views/ExperienceShow.vue'),
                props: true
            }
        ]
    },

    {
        path: '/registro',
        name: 'registro.view',
        component: () => import('@/views/RegistroView.vue'),
        props: true },


        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: function () {
              return import(/* webpackChunkName: "about" */ '../views/login.vue')
            }}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router