import LAUNCHES from "../utils/types";

export const setHistoryLaunches = (historyLaunches) => ({
  type: LAUNCHES.HISTORY_FETCH,
  historyLaunches,
});
export const setUpcomingLaunches = (upcomingLaunches) => ({
  type: LAUNCHES.UPCOMING_FETCH,
  upcomingLaunches,
});
export const fetchLaunches = (offset) => ({
  type: LAUNCHES.FETCH,
  offset,
});
export const setError = (error) => ({
  type: LAUNCHES.ERROR_FETCH,
  error,
});
export const isLoading = () => ({
  type: LAUNCHES.IS_LOADING,
});
