export const ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_TO_CART: "REMOVE_TO_CART",
  CLEAR_CART: "CLEAR_CART",
};

export const initialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const updateLocalStorage = (newState) => {
  return window.localStorage.setItem("cart", JSON.stringify(newState));
};

const withLocalStorageUpdate = (reducerFunction) => {
  return (state, action) => {
    const newState = reducerFunction(state, action);
    updateLocalStorage(newState);
    return newState;
  };
};

const UPDATE_STATE_BY_ACTION = {
  [ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const { payload } = action;
    const productInCartIndex = state.findIndex(
      (item) => item.id === payload.id
    );

    if (productInCartIndex >= 0) {
      const newState = structuredClone(state);
      newState[productInCartIndex].quantity += 1;

      return newState;
    }

    return [...state, { ...payload, quantity: 1 }];
  },
  [ACTION_TYPES.REMOVE_TO_CART]: (state, action) => {
    const newState = state.filter((item) => item.id !== action.payload.id);

    return newState;
  },
  [ACTION_TYPES.CLEAR_CART]: () => {
    return [];
  },
};
export const reducer = withLocalStorageUpdate((state, action) => {
  const { type: actionType } = action;

  const updateState = UPDATE_STATE_BY_ACTION[actionType];

  return updateState ? updateState(state, action) : state;
});
