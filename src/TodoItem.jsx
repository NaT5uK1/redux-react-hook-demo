import { css } from "@emotion/css"
import React, { useCallback } from "react"
import { useDispatch, useMappedState } from "redux-react-hook"
import { deleteTodoAction } from "./action"

const TodoItem = ({ index }) => {
  const mapState = useCallback((state) => state.todos[index], [index])
  const todo = useMappedState(mapState)
  const dispatch = useDispatch()
  const deleteTodo = useCallback(() => dispatch(deleteTodoAction(index)), [index])

  return (
    <li className={styles.root}>
      <span>{todo}</span>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  )
}

const styles = {
  root: css`
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 8px 12px;

    &:hover {
      background-color: #efefef;

      button {
        display: block;
      }
    }

    button {
      display: none;
    }
  `,
}

export default TodoItem
