<template>
  <div>
    <transition v-bind:name="transition" mode="out-in" >
     <div class="card" v-bind:key="users">
              <div class="card-block">
                 <h3><i class="fa fa-users"></i> {{ cardTitle }}</h3> 
              </div>
              <div class="card-block">
                  <h1>{{users}}
                     
                        <i style="font-size:0.5em" class="fa fa-arrow-up" v-if="transition=='green'"></i>
                        <i style="font-size:0.5em" class="fa fa-arrow-down" v-if="transition=='red'"></i>
                  
                  </h1>
                  <h3>users right now
                  
                  </h3>
              </div>
           </div>
        </transition>
  </div>
</template>

<script>

export default {
    created(){
      this.fetchData()
    },
    props:['id','title'],
    data(){
        return { 
            transition:'green',
            users: 0,
            cardTitle:"Real time"
        }
    },
    methods:{
        async fetchData(){
             //const {data} = await Api.getRealtime(this.id, this.$root.bearerToken)   
             //let noUsers = data.rows ? data.rows[0][0] : 0
             let noUsers = Math.floor((Math.random() * 3000) + 1);

             if (noUsers < this.users){
                 this.transition = 'red'
             }
             else{
                 this.transition = 'green'
             }

             this.users = noUsers

             setTimeout(this.fetchData,3000)
        }
    } 
}
</script>

<style scoped>

     .green-enter-active{
         -webkit-animation:a 3s;
         animation:a 3s
        }

      @-webkit-keyframes a
      {
          10%
          {
              background-color:#ebffeb;
              border-color:rgba(0,128,0,.5);
              color:green
              }
      }

      @keyframes a
      {
          10%
          {
              background-color:#ebffeb;
              border-color:rgba(0,128,0,.5);
              color:green
        }
      }

      .green-enter, .green-leave-to /* .fade-leave-active in <2.1.8 */ {
       background-color:#fff;
      }

       .red-enter-active{
         -webkit-animation:a 3s;
         animation:b 3s
        }

      .red-enter, .red-leave-to /* .fade-leave-active in <2.1.8 */ {
       background-color:#fff;
      }


    @-webkit-keyframes b{10%{background-color:#ffebeb;border-color:rgba(255,0,0,.5);color:red}}
    @keyframes b{10%{background-color:#ffebeb;border-color:rgba(255,0,0,.5);color:red}}


</style>
