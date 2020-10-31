import * as t from "./actionTypes";
import axios from "axios";

const BASE_URL = "https://securesurf-backend.herokuapp.com";

const user_email = localStorage.getItem("user_email");

export const getRecentBreachesFromAPI = () => {
  return async function (dispatch) {
    try {
      let url = `${BASE_URL}/breaches`;
      let res = await axios({
        method: 'post',
        url,
        data: { user_email }
      });
      dispatch(loadRecent(res.data));
    } catch (err) {
      console.log("error!", err);
    }
  };
};

export const getMonthlyAggFromAPI = (month) => {
  return async function (dispatch) {
    try {
      let url = `${BASE_URL}/monthly_analytics_aggregated`;
      let res = await axios({
        method: 'post',
        url,
        data: {
          user_email,
          month: month
        }
      });
      dispatch(loadMonthlyAgg(res.data));
    } catch (err) {
      console.log("error!", err);
    }
  };
}

export const acknowledgeNotif = (breach_name) => {
  return async function (dispatch) {
    try {
      let url = `${BASE_URL}/ack_breach`;
      await axios({
        method: 'post',
        url,
        data: {
          user_email,
          breach_name
        }
      });
      dispatch(deleteRecent(breach_name));
    } catch (err) {
      console.log("error!", err);
    }
  };
};

export const startLoading = () => {
  return {
    type: "START_LOADING"
  }
}

export const stopLoading = () => {
  return { type: "STOP_LOADING" }
}

const loadMonthlyAgg = (data) => {
  return {
    type: t.LOAD_MONTHLY_AGG,
    payload: data
  }
}

const loadRecent = (data) => {
  return {
    type: t.LOAD_RECENT,
    payload: data
  };
};

const deleteRecent = (breach_name) => {
  return {
    type: t.ACKNOWLEDGE,
    payload: { breach_name }
  }
}