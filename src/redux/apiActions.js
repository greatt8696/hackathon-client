import React from "react";

import axios from "axios";

// const baseUrl = "http://119.149.42.142:36000/";
const baseUrl = "http://localhost:3600/";

export const initChart = async (dispatch) => {
  const { data } = await axios.get(baseUrl + "recycle/getCharts");
  dispatch({ type: "INIT_CANDLE", payload: data });
};
export const initCoinsPrice = async (dispatch) => {
  const { data } = await axios.get(baseUrl + "recycle/getCoinsPrice");
  dispatch({ type: "INIT_COIN", payload: data });
};
export const initAllUsers = async (dispatch) => {
  const { data } = await axios.get(baseUrl + "user/getUsers");
  dispatch({ type: "SET_USERS", payload: data });
};

export const getRecycleTransaction = async (dispatch, payload) => {
  const { data } = await axios.post(baseUrl + "user/getRecycleTransaction", {
    fromId: payload,
  });
  dispatch({ type: "SET_RECYCLE_TRANSACTION", payload: data });
};

export const getTransferTransaction = async (dispatch, payload) => {
  const { data } = await axios.post(baseUrl + "user/getTransferTransaction", {
    fromId: payload,
  });
  dispatch({ type: "SET_TRANSFER_TRANSACTION", payload: data });
};
