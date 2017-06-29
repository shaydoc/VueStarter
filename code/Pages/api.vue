<template>
  <div>
          <div class="card">
            <div class="card-block">
                <h3 class="card-title">Vue Starter  - /API Folder</h3>
            </div>
            <div class="card-block">
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
