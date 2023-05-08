const initialState = {};

export const topMenu = (state = initialState, action) => {
  // return {
  //   ...state,
  //   ...action.data,
  // };

  switch (action.type) {
    case "Menu":
      return action.data;
    default:
      return state;
  }
};
