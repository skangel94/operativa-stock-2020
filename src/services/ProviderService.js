import axios from 'axios';
import ConfigParams from "./ConfigParams";

export default {
  retrieveAll() {
    return axios.get(ConfigParams.URI.concat("/provideer"))
      .then((response)=>{
       return  response.data;
      }).catch((error)=>{
        console.log(error);
      });
      
  },
  retrieve(id) {
    console.log(id);
      return axios.get(ConfigParams.URI.concat("/provideer/"),{
        params: { id: id }})
      .then((response)=>{
          console.log(response)
        return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  create(provideer) {
      return axios.post(ConfigParams.URI.concat("/provideer/create"),provideer)
      .then((response)=>{
       return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  remove(id) {
    console.log(id);
     return  axios.delete(ConfigParams.URI.concat("/provideer/"),{
      params: { id: id }
    })
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  update(provideer) {
     return  axios.put(ConfigParams.URI.concat("/provideer/edit"),provideer)
      .then((response)=>{
        return response.data
      }).catch((error)=>{
        console.log(error);
      });
  }
}