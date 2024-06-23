import produce from "immer"

const initialState = {
  // users: [],
  user:{name:'dan',password:"111",email:"se@gmail.com"},
  isUser:false

};

const userReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USERS':
      return { ...state, users: action.payload }
    case 'FETCH_INITIAL_DATA_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        error: null,
      };

    case 'FETCH_USERS_ERROR':
      return {
        ...state,
        error: action.payload,
      };


    case 'ADD_USER_SUCCESS':
      return {
        ...state,
      user:action.payload,
      isUser:true,
        error: null,
      };

      case 'ADD_USER_ERROR':
        return {
          ...state,
          error: action.payload,
        };
        case 'LOGIN_SUCCESS':
          return {
            user:{name:'dan',password:"111",email:"se@gmail.com"},
           isUser:true,
            error: action.payload,
          };
        
    case 'LOGIN_ERROR':
      return {
        ...state,
        error: action.payload,
      };


    case 'UPDATE_USER_SUCCESS':
      return{
      ...state,
      user:action.payload,
      isUser:true,
        error: null,
     
      };
    case 'UPDATE_USER_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    // case 'DELETE_USER_SUCCESS':
    //   const updatedUsers = state.users.filter(user => user.id !== action.payload);
    //   return {
    //     ...state,
    //     users: updatedUsers,
    //     error: null,
    //   };

    // case 'DELETE_USER_ERROR':
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };

    default: return state;


  }
}, initialState)

export default userReducer;

// const [state, setState] = useState([])
// useEffect(() => {
//   addRiidle.then(x => setState([...state,x.data]))//dispatch({type:"AAA",data:})
// }, [])



// <div>{state.map(x=>)}</div>//useSelectore(state=>state.user.users)
