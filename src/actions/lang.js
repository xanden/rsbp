import types from "types/lang";

const langActions = Object.freeze({
  onChangeLocale: lang => {
    return {
      type: types.CHANGE_LOCALE,
      lang
    };
  }
});

export default langActions;
