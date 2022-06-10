import axios from 'axios';
const server_add = 'http://localhost:8000';      // addrese lokalai versijai
//const server_add = 'http://192.168.88.240:8000' // addrese produkcijas versijai
class PadomsDataService{
  

  getAll(token){      
    axios.defaults.headers.common["Authorization"] = "Token " + token;      
    return axios.get(server_add + '/api/padoms/');
    //return console.log("tas ir backendaa")
  }   

  createPadoms(data, token){
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.post(server_add + "/api/padoms/", data);
  }
   
  updatePadoms(id, data, token){
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.put(server_add + "/api/padoms/", data);
  }

  deletePadoms(id, token){
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.delete(server_add + `/api/padoms/${id}`);
  }   

  completePadoms(id, token){
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.put(server_add + `/api/padoms/${id}/complete`);    
  }   

}

export default new PadomsDataService();
