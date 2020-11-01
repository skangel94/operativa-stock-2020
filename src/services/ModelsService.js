import axios from 'axios';
import ConfigParams from "./ConfigParams";
export default {
  retrieveAll() {
    return axios.get(ConfigParams.URI.concat("/product/all/q"))
      .then((response)=>{
       return  response.data;
      }).catch((error)=>{
        console.log(error);
      });
      
  },
  All() {
    return axios.get(ConfigParams.URI.concat("/product/all/p"))
      .then((response)=>{
       return  response.data;
      }).catch((error)=>{
        console.log(error);
      });
      
  }
}