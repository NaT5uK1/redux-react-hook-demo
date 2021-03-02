import React from "react"
import TodoList from "./TodoList"
import TodoInput from "./TodoInput"
import { css } from '@emotion/css'

const App = () => {
  return (
    <div className={styles.root}>
      <h1>Todo</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

const styles = {
  root: css`
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    font-family: system-ui;
    margin: 24px auto;
    padding: 4px 24px 24px 24px;
    width: 300px;
  `,
};





export default App