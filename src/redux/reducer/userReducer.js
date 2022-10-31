const initState = {
  users: [],
  wallets: [],
  recycles: [],
  exchangeTransactions: [],
  currentTransaction: {},
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
