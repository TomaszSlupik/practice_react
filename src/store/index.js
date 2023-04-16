import { createStore } from "redux"
import { pizzaReducer } from "./reducers/pizzaReducer"

export const store = createStore(pizzaReducer)
