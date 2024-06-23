import userService from '../services/userService';
import axios from '../config/axios';



export function addUser(user) {
  return (dispatch) => {
    userService.addUser(user)
      .then((response) => {
        dispatch({ type: 'ADD_USER_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'ADD_USER_ERROR', payload: error.message });
      });
  };
}

export function updateUser(user) {
  return (dispatch) => {
   userService.updateUser(user)
      .then((response) => {
        dispatch({ type: 'UPDATE_USER_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_USER_ERROR', payload: error.message });
      });
  };
}

export function login(user) {
  return (dispatch) => {
    axios.post('/user/login/', user)
      .then((response) => {
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
        console.log("success")
      })
      .catch((error) => {
        dispatch({ type: 'LOGIN_ERROR', payload: error.message });
        console.log("bad")
      });
  };
}
export async function fetchUsers() {

  // try {
    // const response = 
   return await axios.get('/user/');
  //   return response.data;
  // } catch (error) {
  //   console.log(error);
  // }
};


export function deleteUser(id) {
  return (dispatch) => {
    axios.delete(`http://localhost:5000/user/${id}`)
      .then(() => {
        dispatch({ type: 'DELETE_USER_SUCCESS', payload: id });
      })
      .catch((error) => {
        dispatch({ type: 'DELETE_USER_ERROR', payload: error.message });
      });
  };
}
