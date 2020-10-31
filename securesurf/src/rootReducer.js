const DEFAULT_STATE = { breaches: [], breach_watch_list: [], monthly_analytics_detailed: [], monthly_analytics_aggregated: [] };

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "LOAD_BREACHES":
      return { ...state, breaches: action.payload }
    default:
      return state;
  }
}

export default rootReducer;