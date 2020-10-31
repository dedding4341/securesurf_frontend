import { act } from "react-dom/test-utils";

const DEFAULT_STATE = { recent: [], breach_watch_list: [], monthly_analytics_detailed: [], monthly_data_set: [], loading: true };

function rootReducer(state = DEFAULT_STATE, action) {
  let breaches;
  switch (action.type) {
    case "LOAD_RECENT":
      return { ...state, recent: action.payload }
    case "LOAD_MONTHLY_AGG":
      let dataset = Object.keys(action.payload).map(site => {
        return { x: site, y: action.payload[site] };
      });
      return { ...state, monthly_data_set: [{ label: "Browsed", values: dataset }] }
    case "ACKNOWLEDGE":
      breaches = state.recent.filter(breach => breach.Name !== action.payload.breach_name);
      return { ...state, recent: breaches }
    case "START_LOADING":
      return { ...state, loading: true }
    case "STOP_LOADING":
      return { ...state, loading: false }
    default:
      return state;
  }
}

export default rootReducer;