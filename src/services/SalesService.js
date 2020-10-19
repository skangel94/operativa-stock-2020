import axios from 'axios';
var url="http://operativa-stock-app.herokuapp.com";
export default {
  retrieveAll() {
    return axios.get(url+"/sale")
      .then((response)=>{
       return  response.data;
      }).catch((error)=>{
        console.log(error);
      });
      
  },
  retrieve(id) {
    console.log(id);
      return axios.get(url+"/sale/",{
        params: { id: id }})
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  create(provideer) {
      return axios.post(url+"/sale/create",provideer)
      .then((response)=>{
       return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },

}