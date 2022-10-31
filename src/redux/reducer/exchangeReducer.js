const initState = {
  exchangeTransactions: [],
  orderbooks: [],
};

const exchangeReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_TRANSACTION":
      return {
        ...state,
        orderbooks: payload,
      };

    default:
      return state;
  }
};

export default exchangeReducer;
