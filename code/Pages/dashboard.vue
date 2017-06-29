<template>
    <div>
          <div class="row">
             <div class="col-md-4">
                 <realtime></realtime>
             </div>
             <div class="col-md-4">
                   <realtime></realtime>
             </div>
             <div class="col-md-4">
                    <realtime></realtime>
             </div>
          </div>
           <div class="row">
             <div class="col-md-4">
                 <realtime></realtime>
             </div>
             <div class="col-md-4">
                   <realtime></realtime>
             </div>
             <div class="col-md-4">
                    <realtime></realtime>
             </div>
          </div>
            <div class="row">
             <div class="col-md-4">
                 <realtime></realtime>
             </div>
             <div class="col-md-4">
                   <realtime></realtime>
             </div>
             <div class="col-md-4">
                    <realtime></realtime>
             </div>
          </div>
          
    </div>
</template>

<script>
import Api from '../Api/api.js'
import Realtime from  '../Components/realtime.vue'

export default {
  components:{
      realtime:Realtime
  },
  created(){
     this.fetchData()
  },
  data(){
       return {
           summary:{}
       }
  },
  methods:{
      async fetchData(){
          //let response = await Api.getSummary()
          //this.summary = response.data
      }
  }
}
</script>
 