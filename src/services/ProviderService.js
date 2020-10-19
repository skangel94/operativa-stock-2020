import axios from 'axios';
var url="http://operativa-stock-app.herokuapp.com";
export default {
  retrieveAll() {
    return axios.get(url+"/provideer")
      .then((response)=>{
       return  response.data;
      }).catch((error)=>{
        console.log(error);
      });
      
  },
  retrieve(id) {
    console.log(id);
      return axios.get(url+"/provideer/",{
        params: { id: id }})
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  create(provideer) {
      return axios.post(url+"/provideer/create",provideer)
      .then((response)=>{
       return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  remove(id) {
    console.log(id);
     return  axios.delete(url+"/provideer/",{
      params: { id: id }
    })
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  update(provideer) {
     return  axios.put(url+"/provideer/edit",provideer)
      .then((response)=>{
        return response.data
      }).catch((error)=>{
        console.log(error);
      });
  }
}