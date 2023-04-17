import { createStore } from "redux"
import { pizzaReducer } from "./reducers/pizzaReducer"

export const store = createStore(pizzaReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
