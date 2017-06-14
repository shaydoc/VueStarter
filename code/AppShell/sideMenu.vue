<template>
       <div>
           
                     <!--  <h2>{{ $root.$data.domainName }} </h2> -->
                          <ul class="list-group">
                               <li class="list-group-item" v-bind:class="{ 'active':this.$route.name == 'dashboard' }">
                                  <router-link :to="{name:'dashboard'}"><i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</router-link>
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

 