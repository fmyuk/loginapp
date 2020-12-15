export function fetchTodo(token) {
  return dispatch => {
    dispatch({ type: "FETCH_TODO_START" });
    fetch("http://localhost:3000/api/todos", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.todos) {
          dispatch({ type: "FETCH_TODO_SUCCESS", todos: data.todos });
        } else {
          alert(data.message);
          dispatch({ type: "FETCH_TODO_ERROR", error: data.message });
      }
      })
      .catch((err) => {
        dispatch({ type: "FETCH_TODO_ERROR", error: err });
    })
  }
}