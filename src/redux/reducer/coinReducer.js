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

const ORDERBOOK_SIZE = 14;

const orderbookSlot = { ask: [], bid: [] };
for (let idx = 0; idx < ORDERBOOK_SIZE; idx++) {
  orderbookSlot.ask.push({ ask_price: 1, ask_size: 1 });
  orderbookSlot.bid.push({ ask_price: 1, ask_size: 1 });
}

const coinsPrice = [
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
});

const initState = {
  exchangeTransactions: [],
  orderbooks: [],
  selectedCoin: {},
  candles: {},
  coinsPrice: [...coinsPrice],
  selectedCoin: {},
  coinsOrderbook: [...coinsPrice],
  selectedOrderbook: { ...orderbookSlot },
  selectedOrderPrice: {},
  recyclePrice: {},
};

const coinReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "INIT_COIN":
      return {
        ...state,
        coinsPrice: state.coinsPrice.map((coin) => {
          return { ...coin, ...payload[coin.code] };
        }),
      };

    case "UPDATE_COIN":
      return {
        ...state,
        coinsPrice: state.coinsPrice.map((coin) => {
          return coin.code === payload.code ? { ...coin, ...payload } : coin;
        }),
      };

    case "INIT_CANDLE":
      return {
        ...state,
        candles: payload,
      };

    case "UPDATE_CANDLE":
      return {
        ...state,
        candles: { ...payload },
      };

    case "UPDATE_RECYCLE_PRICE":
      //console.log("UPDATE_RECYCLE_PRICE",payload);
      return {
        ...state,
        recyclePrice: payload,
      };

    case "CHANGE_TRANSACTION":
      return {
        ...state,
        orderbooks: payload,
      };

    case "CHANGE_COIN": {
      const upDown = payload.change === "RISE" ? "+" : "-";
      const changeRate = `${upDown} ${(payload.change_rate * 100).toFixed(
        2
      )} %`;
      return {
        ...state,
        coinsPrice: state.coinsPrice.map((coin) =>
          coin.code === payload.code ? { ...coin, ...payload, upDown } : coin
        ),
        selectedCoin:
          state.selectedCoin.code === payload.code
            ? { ...state.selectedCoin, ...payload, changeRate, upDown }
            : state.selectedCoin,
      };
    }

    case "SELECT_COIN": {
      return {
        ...state,
        selectedCoin: payload,
      };
    }

    case "SELECT_ORDERBOOK": {
      return {
        ...state,
        selectedOrderPrice: payload,
      };
    }

    case "CHANGE_ORDERBOOK": {
      const splitOrders = {
        ask: [],
        bid: [],
        code: payload.code,
        total_ask_size: payload.total_ask_size,
        total_bid_size: payload.total_bid_size,
      };

      payload.orderbook_units.forEach(
        ({ ask_price, ask_size, bid_price, bid_size }) => {
          splitOrders.ask.push({ ask_price, ask_size });
          splitOrders.bid.push({ bid_price, bid_size });
        }
      );

      return {
        ...state,
        coinsOrderbook: state.coinsOrderbook.map((coin) =>
          coin.code === payload.code ? { ...coin, payload } : coin
        ),
        selectedOrderbook:
          state.selectedCoin.code === payload.code
            ? splitOrders
            : state.selectedOrderbook,
      };
    }

    default:
      return state;
  }
};

export default coinReducer;
