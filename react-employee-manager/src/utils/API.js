import axios from 'axios'

const baseUrl = "https://randomuser.me/api"

export default {
    getMany : function(limit) {
       return axios.get(baseUrl + '/?results=' + limit)
    }
}