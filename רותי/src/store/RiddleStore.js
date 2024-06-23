import produce from 'immer';

const initialState = {
  riddles: [],
  loading: false,
  error: null
};

const riddleReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_RIDDLE_SUCCESS':
        draft.riddles.push(action.payload);
        draft.loading = false;
        draft.error = null;
        break;
      case 'ADD_RIDDLE_ERROR':
        draft.loading = false;
        draft.error = action.payload;
        break;
      case 'UPDATE_RIDDLE_SUCCESS':
        // Handle updating a riddle in the state
        break;
      case 'UPDATE_RIDDLE_ERROR':
        // Handle update error
        break;
      case 'DELETE_RIDDLE_SUCCESS':
        // Handle deleting a riddle from the state
        break;
      case 'DELETE_RIDDLE_ERROR':
        // Handle delete error
        break;
      case 'GET_ALL_RIDDLES_SUCCESS':
        draft.riddles = action.payload;
        draft.loading = false;
        draft.error = null;
        break;
      case 'GET_ALL_RIDDLES_ERROR':
        draft.loading = false;
        draft.error = action.payload;
        break;
      case 'GET_RIDDLE_BY_ID_SUCCESS':
        // Handle getting a specific riddle by ID
        break;
      case 'GET_RIDDLE_BY_ID_ERROR':
        // Handle get by ID error
        break;
      default:
        break;
    }
  });
};

export default riddleReducer;
