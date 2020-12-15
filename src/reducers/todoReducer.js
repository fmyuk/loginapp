const initState = {
  fetching: false,
  fetched: false,
  todos: [],
  error: null
}

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_TODO_START":
      return {
        ...state,
        fetching: true
      };
    case "FETCH_TODO_SUCCESS":
      return {
        ...state,
        fetching: false,
        fetched: true,
        todos: action.todos
      };
    case "FETCH_TODO_ERROR":
      return {
        ...state,
        fetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default todoReducer;
