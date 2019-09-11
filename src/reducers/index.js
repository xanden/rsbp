import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import todoReducer from "./todo";

const rootReducer = history =>
  combineReducers({
    todo: todoReducer,
    router: connectRouter(history)
  });

export default rootReducer;
