import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import types from "../actions/types";

export const todo = (state, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case types.TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };

    default:
      return state;
  }
};

export const todos = (state = [{id: 444, text: "3333433333", completed: true}], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, todo(undefined, action)];
    case types.TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
