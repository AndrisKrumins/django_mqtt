import axios from 'axios';

class TodoDataService{

  getAll(token){      
    axios.defaults.headers.common["Authorization"] = "Token " + token;      
<<<<<<< HEAD
    return axios.get('http://192.168.88.240:8000/api/todos/');
=======
    return axios.get('http://localhost:8000/api/todos/');
>>>>>>> c57fd9b56892cfba9b56b1d0e4cc11b4a123e090
  }   

  createTodo(data, token){
    axios.defaults.headers.common["Authorization"] = "Token " + token;
<<<<<<< HEAD
    return axios.post("http://192.168.88.240:8000/api/todos/", data);
=======
    return axios.post("http://localhost:8000/api/todos/", data);
>>>>>>> c57fd9b56892cfba9b56b1d0e4cc11b4a123e090
  }
   
  updateTodo(id, data, token){
    axios.defaults.headers.common["Authorization"] = "Token " + token;
<<<<<<< HEAD
    return axios.put(`http://192.168.88.240:8000/api/todos/${id}`, data);
=======
    return axios.put(`http://localhost:8000/api/todos/${id}`, data);
>>>>>>> c57fd9b56892cfba9b56b1d0e4cc11b4a123e090
  }

  deleteTodo(id, token){
    axios.defaults.headers.common["Authorization"] = "Token " + token;
<<<<<<< HEAD
    return axios.delete(`http://192.168.88.240:8000/api/todos/${id}`);
=======
    return axios.delete(`http://localhost:8000/api/todos/${id}`);
>>>>>>> c57fd9b56892cfba9b56b1d0e4cc11b4a123e090
  }   

  completeTodo(id, token){
    axios.defaults.headers.common["Authorization"] = "Token " + token;
<<<<<<< HEAD
    return axios.put(`http://192.168.88.240:8000/api/todos/${id}/complete`);    
  }   

  login(data){
    return axios.post("http://192.168.88.240:8000/api/login/", data);
  }   

  signup(data){
    return axios.post("http://192.168.88.240:8000/api/signup/", data);
  }      
}

export default new TodoDataService();
=======
    return axios.put(`http://localhost:8000/api/todos/${id}/complete`);    
  }   

  login(data){
    return axios.post("http://localhost:8000/api/login/", data);
  }   

  signup(data){
    return axios.post("http://localhost:8000/api/signup/", data);
  }      
}

export default new TodoDataService();
>>>>>>> c57fd9b56892cfba9b56b1d0e4cc11b4a123e090
