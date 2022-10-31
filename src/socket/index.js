import { io } from "socket.io-client";

const userSocket = io("ws://192.168.0.108:3636/user");
const tradeSocket = io("ws://192.168.0.108:3636/trade");
const socket = io("ws://192.168.0.108:3636");
// const userSocket = io("ws://119.149.42.142:36360/user");
// const tradeSocket = io("ws://119.149.42.142:36360/trade");
// const socket = io("ws://119.149.42.142:36360");
// const userSocket = io("ws://localhost:3636/user");
// const tradeSocket = io("ws://localhost:3636/trade");
// const socket = io("ws://localhost:3636");

function getTradeSocket(dispatch) {
  tradeSocket.on("order", (arg) => {});
  tradeSocket.on("price", (arg) => {
    const {
      code,
      trade_price,
      change,
      change_rate,
      change_price,
      acc_trade_price_24h,
    } = arg;
    const newData = {
      code,
      trade_price,
      change,
      change_rate,
      change_price,
      acc_trade_price_24h,
    };
    dispatch({ type: "UPDATE_COIN", payload: newData });
  });
  tradeSocket.on("candle", (arg) => {
    dispatch({ type: "UPDATE_CANDLE", payload: arg });
  });
  return tradeSocket;
}

function getUserSocket(dispatch) {
  userSocket.on("transfer", (arg) => {
    dispatch({ type: "ADD_TRANSACTION", payload: arg });
  });
  return userSocket;
}

export { getUserSocket, getTradeSocket };
