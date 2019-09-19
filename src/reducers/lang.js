import types from "types/lang";

const langReduces = (state = "en", action) => {

  if (action.type === types.CHANGE_LOCALE) {
    return action.lang;
  }
  return state;
};

export default langReduces;
