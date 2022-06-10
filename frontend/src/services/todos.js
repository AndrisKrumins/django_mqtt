import axios from 'axios';
const server_add = 'http://localhost:8000';      // addrese lokalai versijai
//const server_add = 'http://192.168.88.240:8000' // addrese produkcijas versijai
class TodoDataService{

  getAll(token){      
    axios.defaults.headers.common["Authorization"] = "Token " + token;      
    return axios.get(server_add +  '/api/todos/');
  }   

  createTodo(data, token){
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.post(server_add +  "/api/todos/", data);
  }
   
  updateTodo(id, data, token){
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.put(server_add +  `/api/todos/${id}`, data);
  }

  deleteTodo(id, token){
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.delete(server_add +  `/api/todos/${id}`);
  }   

  completeTodo(id, token){
    axios.defaults.headers.common["Authorization"] = "Token " + token;
    return axios.put(server_add +  `/api/todos/${id}/complete`);    
  }   

  login(data){
    return axios.post(server_add + "/api/login/", data);
  }   

  signup(data){
    return axios.post(server_add + "/api/signup/", data);
  }      
}

export default new TodoDataService();