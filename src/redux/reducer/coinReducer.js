const exchange = [
  "서울거래소",
  "인천거래소",
  "세종거래소",
  "대전거래소",
  "강원거래소",
  "광주거래소",
  "부산거래소",
  "울산거래소",
  "대구거래소",
];

const initState = {
  exchangeTransactions: [],
  orderbooks: [],
  selectedCoin: {},
  candles: {},
  coinsPrice: [
    "KRW-BTC",
    "KRW-ETH",
    "KRW-XRP",
    "KRW-ADA",
    "KRW-DOGE",
    "KRW-ATOM",
    "KRW-SOL",
    "KRW-ETC",
    "KRW-MATIC",
  ].map((val, idx) => {
    return { code: val, exchange: exchange[idx] };
  }),
};

const coinReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_COIN":

      return {
        ...state,
        coinsPrice: state.coinsPrice.map((coin) => {
          return coin.code === payload.code ? { ...coin, ...payload } : coin;
        }),
      };

    case "UPDATE_CANDLE":
      return {
        ...state,
        candles: { ...payload },
      };
    case "ADD_TRANSACTION":
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

export default coinReducer;
