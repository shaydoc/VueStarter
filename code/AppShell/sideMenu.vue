<template>
       <div>
           
                      
                          <ul class="list-group">
                               <li class="list-group-item" v-bind:class="{ 'active':this.$route.name == 'dashboard' }">
                                  <router-link :to="{name:'dashboard'}"><i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</router-link>
                             </li>
                              <li class="list-group-item" v-bind:class="{ 'active':this.$route.name == 'api' }">
                                  <router-link :to="{name:'api'}"><i class="fa fa-paper-plane" aria-hidden="true"></i> API</router-link>
                             </li>
                              <li class="list-group-item" v-bind:class="{ 'active':this.$route.name == 'appshell' }">
                                  <router-link :to="{name:'appshell'}"><i class="fa fa-code" aria-hidden="true"></i> AppShell</router-link>
                             </li>
                              <li class="list-group-item" v-bind:class="{ 'active':this.$route.name == 'pages' }">
                                  <router-link :to="{name:'pages'}"><i class="fa fa-book" aria-hidden="true"></i> Pages</router-link>
                             </li>
                              <li class="list-group-item" v-bind:class="{ 'active':this.$route.name == 'router' }">
                                  <router-link :to="{name:'router'}"><i class="fa fa-list" aria-hidden="true"></i> Routing</router-link>
                             </li>
                             </ul>
                         <ul class="list-group" style="margin-top:10px"  v-if="this.$route.params.id !== undefined" >
                         
                          </ul>
                       <ul class="list-group">
                        
                            
                         
                       </ul>
                       </div>
</template>

<script>
export default {

}
</script>

 