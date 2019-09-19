import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import todoReducer from "reducers/todo";
import langReduces from "reducers/lang";

const rootReducer = history =>
  combineReducers({
    todo: todoReducer,
    lang: langReduces,
    router: connectRouter(history)
  });

export default rootReducer;
