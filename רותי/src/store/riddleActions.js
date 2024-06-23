// import axios from '../config/axios';
import * as riddleService from '../services/riddleService';


export function getAllRiddles(parameters) {
  return (dispatch) => {
    riddleService.getRiddle(parameters)
      .then((response) => {
        dispatch({ type: 'GET_ALL_RIDDLES_SUCCESS', payload: response });
      })
      .catch((error) => {
        dispatch({ type: 'GET_ALL_RIDDLES_ERROR', payload: error.message });
      });
  };
}
export function getAllCertified() {
  return (dispatch) => {
    riddleService.getAllCertified()
      .then((response) => {
        dispatch({ type: 'GET_ALL_RIDDLES_SUCCESS', payload: response });
      })
      .catch((error) => {
        dispatch({ type: 'GET_ALL_RIDDLES_ERROR', payload: error.message });
      });
  };
}

// export function getRiddleById(id) {
//   return (dispatch) => {
//    riddleService.getRiddle(id)
//       .then((response) => {
//         dispatch({ type: 'GET_RIDDLE_BY_ID_SUCCESS', payload: response.data });
//       })
//       .catch((error) => {
//         dispatch({ type: 'GET_RIDDLE_BY_ID_ERROR', payload: error.message });
//       });
//   };
// }

export function addRiddle(riddle) {


  return (dispatch) => {
    riddleService.addRiddle(riddle)
      .then((response) => {
        dispatch({ type: 'ADD_RIDDLE_SUCCESS', payload: response.data });

      })
      .catch((error) => {
        dispatch({ type: 'ADD_RIDDLE_ERROR', payload: error.message });
      });
  };
}

export function updateRiddle(riddle) {
  return (dispatch) => {
    riddleService.setRiddle(riddle)
      .then((response) => {
        dispatch({ type: 'UPDATE_RIDDLE_SUCCESS', payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: 'UPDATE_RIDDLE_ERROR', payload: error.message });
      });
  };
}



export function deleteRiddle(id) {
  return (dispatch) => {
    riddleService.deleteRiddle(id)
      .then(() => {
        dispatch({ type: 'DELETE_Riddle_SUCCESS', payload: id });
      })
      .catch((error) => {
        dispatch({ type: 'DELETE_Riddle_ERROR', payload: error.message });
      });
  };
}
