import types from "../actions/types";
import { todo, todos } from "./todo";

describe("todoReducer", () => {
  it("ADD_TODO", () => {
    const action = {
      type: types.ADD_TODO
    };
    expect(todo({}, action)).toEqual({
      id: action.id,
      text: action.text,
      completed: false
    });
  });

  it("TOGGLE_TODO", () => {
    const action = {
      type: types.TOGGLE_TODO,
      id: 88
    };
    const state = { id: 88, text: 12, completed: false };

    expect(todo(state, action)).toEqual({
      ...state,
      completed: !state.completed
    });
    expect(todo({...state, id: 22}, action)).toEqual({...state, id: 22});
  });
});
