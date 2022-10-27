import { io } from "socket.io-client";

const userSocket = io("ws://localhost:3636/user");
const tradeSocket = io("ws://localhost:3636/trade");
const socket = io("ws://localhost:3636");

function getTradeSocket(dispatch) {
  tradeSocket.on("trade", (arg) => {
    console.log(dispatch);
  });
  return userSocket;
}

function getUserSocket(dispatch) {
  userSocket.on("transfer", (arg) => {
    dispatch({ type: "ADD_TRANSACTION", payload: arg });
  });
  return userSocket;
}

export { getUserSocket, getTradeSocket };
