//// 1. Define route components.
//// These can be imported from other files
import dashboard from './../Pages/dashboard.vue'
import api from './../Pages/api.vue'
import appshell from './../Pages/appshell.vue'
import pages from './../Pages/pages.vue'
import router from './../Pages/router.vue'
const routes =[
    { name: 'dashboard', path: '/dashboard', component: dashboard },
    { name: 'api', path: '/api', component: api },
    { name: 'appshell', path: '/appshell', component: appshell },
    { name: 'pages', path: '/pages', component: pages },
    { name: 'router', path: '/router', component: router },
  ]


export default routes

