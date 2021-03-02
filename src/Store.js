import { createStore } from "redux"
import reducer from "./reducer"
import {composeWithDevTools} from 'redux-devtools-extension';

export const makeStore = () => {
  console.log("makestore")
  return createStore(
    reducer,
    {
      lastUpdated: 0,
      todos: [
        'Make the fire!',
        'Fix the breakfast!',
        'Wash the dishes!',
        'Do the mopping!',
      ],
    },
    composeWithDevTools()
  )
}
