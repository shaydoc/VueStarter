<template>
 
     <nav class="navbar navbar-inverse navbar-static-top">
            <div class="container-fluid">
                <div class="navbar-header">
                   <button type="button" class="hamburger hidden-md hidden-lg" @click="toggle" v-bind:class="{'is-open':isClosed==false, 'is-closed':isClosed}" >
                <span class="hamb-top"></span>
    			<span class="hamb-middle"></span>
				<span class="hamb-bottom"></span>
                   </button>
                    <a class="navbar-brand visible-md visible-lg" href="/#/dashboard" style="font-family:Georgia;font-weight:200;font-size:2em;color:#fff">
                      Shay Doherty
                    </a>
                   
                   
                </div>
              <ul class="nav navbar-right top-nav hidden-xs">
                <li class="dropdown" v-bind:class="{ 'open': userOpen  }">
                    <a class="dropdown-toggle" @click="toggleUser"><i class="fa fa-list"></i>  <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                               <li v-bind:class="{ 'active':this.$route.name == 'dashboard' }">
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
                </li>
            </ul>  
            </div>
        </nav>
     
          
</template>

<script>
export default {
   props:['isClosed'],
   data(){
       return{
           messagesOpen:false,
           alertsOpen:false,
           userOpen:false
       }
   },
   methods:{
       toggle(){
        this.$emit('toggleHamburger')
       },
       toggleMessages(){
           this.messagesOpen = !this.messagesOpen;
       },
       toggleAlerts(){
           this.alertsOpen = !this.alertsOpen;
       },
       toggleUser(){
           this.userOpen = !this.userOpen;
       }
   }
}
</script>
