import axios from 'axios';
var url="http://operativa-stock-app.herokuapp.com";
export default {
  retrieveAll() {
    return axios.get(url+"/detailsale")
      .then((response)=>{
       return  response.data;
      }).catch((error)=>{
        console.log(error);
      });
      
  },
  retrieve(id) {
    console.log(id);
      return axios.get(url+"/detailsale/",{
        params: { id: id }})
      .then((response)=>{
        console.log(response)
        return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  create(stock) {
    console.log(stock);
      return axios.post(url+"/stock/detailsale",stock)
      .then((response)=>{
       return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  remove(id) {
    console.log(id);
     return  axios.delete(url+"/detailsale/",{
      params: { id: id }
    })
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.log(error);
      });
  },
  update(stock) {
     return  axios.put(url+"/stock/detailsale",stock)
      .then((response)=>{
        return response.data
      }).catch((error)=>{
        console.log(error);
      });
  }
}