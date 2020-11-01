
const DEFAULT_STATE = { recent: [], watch_list: [], monthly_safe_danger: [0, 0], monthly_analytics_detailed: [], monthly_data_set: [], loading: true };

function rootReducer(state = DEFAULT_STATE, action) {
  let breaches;
  switch (action.type) {
    case "LOAD_RECENT":
      return { ...state, recent: action.payload }
    case "LOAD_WATCH_LIST":
      if (action.payload === null) {
        return state;
      }
      return { ...state, watch_list: action.payload }
    case "POST_WATCH_LIST":
      return { ...state, watch_list: action.payload }
    case "LOAD_MONTHLY_SAFE_DANGER":
      console.log("monthly dangers...", action.payload);
      return { ...state, monthly_safe_danger: action.payload }
    case "LOAD_MONTHLY_DATA":
      // action.payload = { aggData, detailData }
      let detailDataset = action.payload.detailData

      let dataset = Object.keys(action.payload.aggData).map(site => {
        return { x: site, y: action.payload.aggData[site] };
      });

      if (dataset.length === 0) {
        return { ...state, monthly_analytics_detailed: detailDataset, monthly_data_set: [] }
      }
      return { ...state, monthly_analytics_detailed: detailDataset, monthly_data_set: [{ label: "Browsed", values: dataset }] }
    case "ACKNOWLEDGE":
      breaches = state.recent.filter(breach => breach.Name !== action.payload);
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