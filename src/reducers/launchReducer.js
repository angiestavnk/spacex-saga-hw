import LAUNCHES from "../utils/types";

const launchReducer = (
  state = { upcomingLaunches: [], historyLaunches: [] },
  action
) => {
  switch (action.type) {
    case LAUNCHES.UPCOMING_FETCH:
      return {
        ...state,
        upcomingLaunches: [
          ...state.upcomingLaunches,
          ...action.upcomingLaunches,
        ],
      };
    case LAUNCHES.HISTORY_FETCH:
      return {
        ...state,
        historyLaunches: [...state.historyLaunches, ...action.historyLaunches],
      };
    default:
      return state;
  }
};
export default launchReducer;
