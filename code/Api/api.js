
import axios from 'axios'

export default {
        //GETS
        getSummary(){
           return axios.get('api/DashboardSummary')
        },
      
}