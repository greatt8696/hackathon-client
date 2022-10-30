import React from "react";

import axios from "axios";

const baseUrl = "http://119.149.42.142:36000/";

export const initChart = async (dispatch) => {
  const { data } = await axios.get(baseUrl + "recycle/getCharts");
  dispatch({ type: "INIT_CANDLE", payload: data });
};

export const initCoinsPrice = async (dispatch) => {
  const { data } = await axios.get(baseUrl + "recycle/getCoinsPrice");
  dispatch({ type: "INIT_COIN", payload: data });
};
