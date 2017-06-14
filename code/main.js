import Vue from 'vue'
import router from './Routing/router.js'
import MainApp from './AppShell/mainApp.vue'
 

const app = new Vue({
    router,
    components:{  'main-app':MainApp }
}).$mount('#app')
 