import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from './../components/AppSectionBanner'
import News from './../components/AppSectionNews'
import Notice from './../components/AppSectionNewsNotice'
import App404 from './../components/App404'

Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass: 'link-active',
    routes: [{
        path: '/',
        component: Home
    }, {
        path: '/news',
        alias: '/notices',
        component: News
    }, {
        path: '/news/:idnotice',
        name: 'notice',
        component: Notice,
        beforeEnter: (to, form, next) => {
            next();
        }
    }, {
        path: '/admin',
        redirect: '/'
    }, {
        path: '*',
        component: App404
    }]
})

