import { createStore, combineReducers } from "redux";
import { countReducer } from "./reducers/countReducer";
import { fooReducer } from "./reducers/fooReducer";

const rootReducer = combineReducers({ countReducer, fooReducer });

export const store = createStore(rootReducer);
