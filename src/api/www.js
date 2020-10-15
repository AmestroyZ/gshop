import Vue from 'vue'
import axios from 'axios' 


const MyHttpServer = {}

MyHttpServer.install = (vue) => {
    axios.defaults.baseURL = 'http://localhost:4000/'


    //添加拦截器
    axios.interceptors.response.use(function(response){
        return response
    },function(error){
        return Promise.reject(error);
    })
    
    Vue.prototype.$http = axios

}
export default MyHttpServer