<template>
  <div>
          <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Vue Starter  - /API Folder</h3>
            </div>
            <div class="panel-body">
                 <p>
                     All server layer calls are laid out in this folder
                 </p>
                 <ul>
                     <li>
                         api.js
                     </li>
                 </ul>
                 <code>

                    import axios from 'axios'
                    <br/><br/>
                    export default {<br/>
                            //GETS<br/>
                            getSummary(){<br/>
                            return axios.get('api/DashboardSummary')<br/>
                            },<br/>
                        
                    }<br/>
                 </code>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
