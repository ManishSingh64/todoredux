import {
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  COMPLETE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "./action.types";

const initialState = {
  addTodo: {
    loading: false,
    error: false,
  },
  getTodos: {
    loading: false,
    error: false,
  },
  data: []
};

export const todoReducer = (state = initialState, { type, payload,value }) => {
  switch (type) {
    case GET_TODO_LOADING: {
      return {
        ...state,
        getTodos: {
          loading: true,
          error: false,
        },
      };
    }

    case GET_TODO_SUCCESS: {
      // console.log("payload", payload);
      return {
        ...state,
        getTodos: {
          loading: false,
          error: false,
        },
        data: payload,
      };
    }

    case GET_TODO_ERROR: {
      return {
        ...state,
        getTodos: {
          loading: false,
          error: true,
        },
      };
    }

    case ADD_TODO_LOADING: {
      // console.log(state.todos)
      return {
        ...state,
        addTodo: {
          loading: true,
          error: false,
        },
      };
    }
    case ADD_TODO_SUCCESS: {
      // console.log(state.todos)
      let temp = [...state.data, payload];
      return {
        ...state,
        addTodo: {
          loading: false,
          error: false,
        },
        data: temp,
      };
    }
    case ADD_TODO_ERROR: {
      // console.log(state.todos)
      return {
        ...state,
        addTodo: {
          loading: false,
          error: true,
        },
      };
    }

    case COMPLETE_TODO: {
      let newTodos = state.data.map((todo) => {
        if (todo.id === payload) {
          todo.isCompleted = !todo.isCompleted;
          console.log(todo)
        }
        return todo;
      });
      // console.log(newTodos)
      return { ...state, data: newTodos};
  
    };

    case DELETE_TODO: {
      let deletedTodo = state.data.filter((todo) => todo.id !== payload);
      console.log(deletedTodo)
      return {
        ...state,data: deletedTodo
      }
      
    }

    case UPDATE_TODO: {
      // console.log(state.data)
    //  console.log("update",payload);
     let updatedTodo = state.data.map((el) => {
      if(el.id === payload.id){
        el.value = payload.value;
        // console.log(el)
      }
      return el;
     })

     return {
      ...state,data:updatedTodo
     }
    }

    default:
      return state;
  }
};
