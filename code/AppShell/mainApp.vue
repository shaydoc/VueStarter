<template>
      <div id="wrapper" v-bind:class="{'toggled':isClosed == false}" >
        <div class="overlay" v-bind:class="{'is-open':isClosed==false, 'is-closed':isClosed}" ></div>
    
        <!-- Sidebar -->
        <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation" v-bind:class="{'is-open':isClosed==false, 'is-closed':isClosed}" >
            <ul class="nav sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#/dashboard">Vue Starter
                    </a>
                </li>
                <li  v-bind:class="{ 'active':this.$route.name == 'dashboard' }">
                    <router-link :to="{name:'dashboard'}"><i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</router-link>

                </li>
                      <li   v-bind:class="{ 'active':this.$route.name == 'api' }">
                                  <router-link :to="{name:'api'}"><i class="fa fa-paper-plane" aria-hidden="true"></i> API</router-link>
                             </li>
                              <li  v-bind:class="{ 'active':this.$route.name == 'appshell' }">
                                  <router-link :to="{name:'appshell'}"><i class="fa fa-code" aria-hidden="true"></i> AppShell</router-link>
                             </li>
                              <li v-bind:class="{ 'active':this.$route.name == 'pages' }">
                                  <router-link :to="{name:'pages'}"><i class="fa fa-book" aria-hidden="true"></i> Pages</router-link>
                             </li>
                              <li  v-bind:class="{ 'active':this.$route.name == 'router' }">
                                  <router-link :to="{name:'router'}"><i class="fa fa-list" aria-hidden="true"></i> Routing</router-link>
                             </li>           
                         
            </ul>
        </nav>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
              <top-menu :isClosed="isClosed" v-on:toggleHamburger="toggle"></top-menu>
            
              <div class="container-fluid" >
                <div class="row">
                    <div class="col-md-2 hidden-sm hidden-xs">
                       <side-menu></side-menu>
                    </div>
                    <div class="col-md-10">
                        <ol class="breadcrumb">
                            <li><a href="#/dashboard"><i class="fa fa-home"></i></a></li>
                            <li class="active">{{this.$route.name}}</li>
                        </ol>
                    <transition name="component-fade" mode="out-in">  
                        <keep-alive>              
                          <router-view></router-view>
                        </keep-alive>
                    </transition>
                    </div>
                </div>
                
            </div>
        
        <footer class="footer">
            <div class="container">
                <div class="row">
                
                </div>
            </div>
        </footer>
        </div>
        <!-- /#page-content-wrapper -->
    </div>
    <!-- /#wrapper -->
</template>

<script>
import TopMenu from './topMenu.vue'
import SideMenu from './sideMenu.vue'




export default {
  created(){
      var self = this
      this.$router.beforeEach((to, from, next) => {
        self.isClosed = true
        next()
      })
  },
  data(){
    return {
        isClosed:true,
    }
  },
  methods:{
   toggle(){
       this.isClosed = !this.isClosed
   }
  },
  components:{ 'top-menu':TopMenu, 'side-menu':SideMenu }
}
</script>
<style>

</style>

 