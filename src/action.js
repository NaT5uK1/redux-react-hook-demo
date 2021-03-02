export const ADD_TODO = "add todo"
export const DELETE_TODO = "delete todo"

export const addTodoAction = (todo) => {
  return {
    type: ADD_TODO,
    todo,
  }
}

export const deleteTodoAction = (index) => {
  return {
    type: DELETE_TODO,
    index,
  }
}
