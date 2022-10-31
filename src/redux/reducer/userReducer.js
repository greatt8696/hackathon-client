const initState = {
  users: [],
  wallets: [],
  recycles: [],
  transferTransactions: [],
  recycleTransactions: [],
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
    case "SET_TRANSFER_TRANSACTION":
      console.log("SET_TRANSFER_TRANSACTION", payload);
      return {
        ...state,
        transferTransactions: payload,
      };
    case "SET_RECYCLE_TRANSACTION":
      console.log("SET_RECYCLE_TRANSACTION", payload);
      return {
        ...state,
        recycleTransactions: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
