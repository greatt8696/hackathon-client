const initState = {
  assetTransactions: [],
};

const transferAssetReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TRANSACTION":
      console.log("@@@@",payload);
      return { ...state, assetTransactions: [...state.assetTransactions, payload] };

    default:
      return state;
  }
};

export default transferAssetReducer;
