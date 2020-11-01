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

export const getWatchListFromAPI = () => {
  return async function (dispatch) {
    try {
      let url = `${BASE_URL}/get_breach_watch_list`;
      let res = await axios({
        method: 'post',
        url,
        data: {
          user_email
        }
      });
      dispatch(loadWatchList(res.data));
    } catch (err) {
      console.log("error!", err);
    }
  };
}

export const getMonthlyFromAPI = (month) => {
  return async function (dispatch) {
    try {
      let aggUrl = `${BASE_URL}/monthly_analytics_aggregated`;
      let aggregatedRes = await axios({
        method: 'post',
        url: aggUrl,
        data: {
          user_email,
          month: month
        }
      });
      let detailUrl = `${BASE_URL}/monthly_analytics_detailed`;
      let detailedRes = await axios({
        method: 'post',
        url:detailUrl,
        data: {
          user_email,
          month: month
        }
      });
      dispatch(loadMonthly(aggregatedRes.data, detailedRes.data));
    } catch (err) {
      console.log("error!", err);
    }
  };
}

export const getMonthlyDangerCts = () => {
  return async function (dispatch) {
    try {
      let url = `${BASE_URL}/get_monthly_danger_counts`;
      let res = await axios({
        method: 'post',
        url,
        data: {
          user_email
        }
      });
      dispatch(loadMonthlyDangerCts(res.data));
      console.log(res.data);
    } catch (err) {
      console.log("error!", err);
    }
  };
};


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

const loadMonthly = (aggData, detailData) => {
  return {
    type: t.LOAD_MONTHLY_DATA,
    payload: {
      aggData,
      detailData
    }
  }
}

const loadWatchList = (data) => {
  return {
    type: t.LOAD_WATCH_LIST,
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
const loadMonthlyDangerCts = (data) => {
  return {
    type: t.LOAD_MONTHLY_SAFE_DANGER,
    payload: data
  }
}