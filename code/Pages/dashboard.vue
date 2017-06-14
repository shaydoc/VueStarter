<template>
    <div>
          <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Vue Starter Dashboard</h3>
            </div>
            <div class="panel-body">
                <ul>
                    <li>App Structure</li>
                    <li>Router</li>
                    <li>Pages</li>
                    <li>API</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Api from '../Api/api.js'

export default {
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
 