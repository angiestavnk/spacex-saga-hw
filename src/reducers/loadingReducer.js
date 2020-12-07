import LAUNCHES from "../utils/types";
const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case LAUNCHES.IS_LOADING:
      return true;
    case LAUNCHES.ERROR_FETCH:
    case LAUNCHES.HISTORY_FETCH:
    case LAUNCHES.UPCOMING_FETCH:
      return false;
    default:
      return state;
  }
};
export default loadingReducer;
