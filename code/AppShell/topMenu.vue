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
                <li class="dropdown" v-bind:class="{ 'open': messagesOpen  }">
                    <a  class="dropdown-toggle" @click="toggleMessages"><i class="fa fa-envelope"></i> <b class="caret"></b></a>
                    <ul class="dropdown-menu message-dropdown">
                        <li class="message-preview">
                            <a href="#">
                                <div class="media">
                                    <span class="pull-left">
                                        <img class="media-object" src="http://placehold.it/50x50" alt="">
                                    </span>
                                    <div class="media-body">
                                        <h5 class="media-heading"><strong>John Smith</strong>
                                        </h5>
                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="message-preview">
                            <a href="#">
                                <div class="media">
                                    <span class="pull-left">
                                        <img class="media-object" src="http://placehold.it/50x50" alt="">
                                    </span>
                                    <div class="media-body">
                                        <h5 class="media-heading"><strong>John Smith</strong>
                                        </h5>
                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="message-preview">
                            <a href="#">
                                <div class="media">
                                    <span class="pull-left">
                                        <img class="media-object" src="http://placehold.it/50x50" alt="">
                                    </span>
                                    <div class="media-body">
                                        <h5 class="media-heading"><strong>John Smith</strong>
                                        </h5>
                                        <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li class="message-footer">
                            <a href="#">Read All New Messages</a>
                        </li>
                    </ul>
                </li>
                <li class="dropdown" v-bind:class="{ 'open': alertsOpen  }">
                    <a  class="dropdown-toggle" @click="toggleAlerts"><i class="fa fa-bell"></i> <b class="caret"></b></a>
                    <ul class="dropdown-menu alert-dropdown">
                        <li>
                            <a href="#">Alert Name <span class="label label-default">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span class="label label-primary">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span class="label label-success">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span class="label label-info">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span class="label label-warning">Alert Badge</span></a>
                        </li>
                        <li>
                            <a href="#">Alert Name <span class="label label-danger">Alert Badge</span></a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="#">View All</a>
                        </li>
                    </ul>
                </li>
                <li class="dropdown" v-bind:class="{ 'open': userOpen  }">
                    <a class="dropdown-toggle" @click="toggleUser"><i class="fa fa-list"></i>  <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                               <li v-bind:class="{ 'active':this.$route.name == 'dashboard' }">
                                  <router-link :to="{name:'dashboard'}"><i class="fa fa-tachometer" aria-hidden="true"></i> Dashboard</router-link>
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
