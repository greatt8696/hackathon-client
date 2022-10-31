const initState = {
  assetTransactions: [],
};

const transferAssetReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TRANSACTION":
      if (state.assetTransactions.length >= 180) state.assetTransactions.pop();
      return {
        ...state,
        currentTransaction: payload,
        assetTransactions: [payload, ...state.assetTransactions],
      };

    default:
      return state;
  }
};

export default transferAssetReducer;
