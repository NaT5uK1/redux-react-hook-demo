import { css } from "@emotion/css"
import React from "react"
import { useMappedState } from "redux-react-hook"
import TodoItem from "./TodoItem"

const mapState = (state) => ({
    lastUpdated: state.lastUpdated,
    todoCount: state.todos.length,
})

const TodoList = () => {
  const { lastUpdated, todoCount } = useMappedState(mapState)
  return (
    <div>
      <div className={styles.count}>You have {todoCount} todos</div>
      <ul className={styles.todos}>
        {
        new Array(todoCount).fill(null).map((c, index) => (
          <TodoItem index={index} key={index} />
        ))
        }
      </ul>
      <div className={styles.lastUpdated}>
        Last Updated:{" "}
        {lastUpdated ? new Date(lastUpdated).toLocaleString() : "Never"}
      </div>
    </div>
  )
}

const styles = {
  count: css`
    font-size: 12px;
  `,
  lastUpdated: css`
    color: #666;
    font-size: 10px;
  `,
  todos: css`
    padding-left: 0;
  `,
}

export default TodoList
