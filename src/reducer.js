import { ADD_TODO, DELETE_TODO } from "./action"

const initialState = {
  lastUpdated: 0,
  todos: [
    'This is the 1st todo'
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        lastUpdated: Date.now(),
        todos: state.todos.concat(action.todo),
      }
    }

    case DELETE_TODO: {
      const todos = state.todos.slice()
      todos.splice(action.index, 1)
      return {
        ...state,
        lastUpdated: Date.now(),
        todos,
      }
    }

    default:
      return state
  }
}
export default reducer