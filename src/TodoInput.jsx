import { css } from "@emotion/css"
import React, { useState } from "react"
import { useDispatch } from "redux-react-hook"
import { addTodoAction } from "./action"

const TodoInput = () => {
  const [newTodo, setNewTodo] = useState("")
  const dispatch = useDispatch()

  return (
    <input
      className={styles.root}
      type="text"
      onChange={(e) => setNewTodo(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          dispatch(addTodoAction(newTodo))
          setNewTodo("")
        }
      }}
      value={newTodo}
    />
  )
}

const styles = {
  root:css`
    box-sizing: border-box;
    font-size: 16px;
    margin-bottom: 24px;
    padding: 8px 12px;
    width: 100%;
    background: '#fff';
  `
}

export default TodoInput
