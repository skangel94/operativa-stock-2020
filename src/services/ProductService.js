import axios from 'axios';
import ConfigParams from "./ConfigParams";
export default {
  retrieveAll() {
    return axios.get(ConfigParams.URI.concat("/product"))
      .then((response)=>{
       return  response.data;
      }).catch((error)=>{
       console.log(error);
      });
      
  },
  retrieve(id) {
    console.log(id);
      return axios.get(ConfigParams.URI.concat("/product/"),{
        params: { id: id }})
      .then((response)=>{
        console.log(response);
        return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  create(product) {
      return axios.post(ConfigParams.URI.concat("/product/create"),product)
      .then((response)=>{
       return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  
  remove(id) {
    console.log(id);
     return  axios.delete(ConfigParams.URI.concat("/product/"),{
      params: { id: id }
    })
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  update(product) {
     return axios.put(ConfigParams.URI.concat("/product/edit"), product)
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  }
}