<template>
    <div>
          <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Vue Starter Dashboard</h3>
            </div>
            <div class="panel-body">
                <ul>
                    <li><router-link to="/api">/API</router-link> - a place for ajax calls
                    </li>
                    <li><router-link to="/appshell">/AppShell</router-link> - a place for your page container shell </li>
                    <li><router-link to="/pages">/Pages</router-link> - a place for .vue page components</li>
                    <li><router-link to="/router">/Routing</router-link> - a place for linking .vue pages to route endpoints</li>
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
 