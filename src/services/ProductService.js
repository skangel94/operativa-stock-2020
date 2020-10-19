import axios from 'axios';
var url="http://operativa-stock-app.herokuapp.com";
export default {
  retrieveAll() {
    return axios.get(url+"/product")
      .then((response)=>{
       return  response.data;
      }).catch((error)=>{
        console.log(error);
      });
      
  },
  retrieve(id) {
    console.log(id);
      return axios.get(url+"/product/",{
        params: { id: id }})
      .then((response)=>{
        console.log(response);
        return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  create(product) {
      return axios.post(url+"/product/create",product)
      .then((response)=>{
       return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  
  remove(id) {
    console.log(id);
     return  axios.delete(url+"/product/",{
      params: { id: id }
    })
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  update(product) {
     return axios.put(url+"/product/edit", product)
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  }
}