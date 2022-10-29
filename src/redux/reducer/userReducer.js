const initState = {
  users: [],
  wallets: [],
  recycles: [],
  exchangeTransactions: [],
};

const userReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_USERS":
      return {
        ...state,
        users: payload,
      };

    case "SET_WALLETS":
      return {
        ...state,
        wallets: payload,
      };

    case "SET_RECYCLES":
      return {
        ...state,
        recycles: payload,
      };

    case "ADD_TRANSACTION":
      if (state.exchangeTransactions.length >= 5)
        state.exchangeTransactions.pop();
      return {
        ...state,
        exchangeTransactions: [payload, ...state.exchangeTransactions],
      };

    case "CHANGE_TRANSACTION":
      return {
        ...state,
        orderbooks: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
