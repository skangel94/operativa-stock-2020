import axios from 'axios';
var url="http://operativa-stock-app.herokuapp.com";
export default {
  retrieveAll() {
    return axios.get(url+"/product/all/q")
      .then((response)=>{
       return  response.data;
      }).catch((error)=>{
        console.log(error);
      });
      
  },
  All() {
    return axios.get(url+"/product/all/p")
      .then((response)=>{
       return  response.data;
      }).catch((error)=>{
        console.log(error);
      });
      
  }
}