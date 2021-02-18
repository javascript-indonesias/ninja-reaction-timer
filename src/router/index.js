import { createRouter, createWebHashHistory } from 'vue-router';

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const HomeComponent = () => import(/* webpackChunkName: "home" */ '../views/Home.vue');
const AboutComponent = () => import(/* webpackChunkName: "about" */ '../views/About.vue');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutComponent,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        redirect: { name: 'Home' },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
