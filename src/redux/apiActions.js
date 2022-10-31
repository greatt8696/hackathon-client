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
