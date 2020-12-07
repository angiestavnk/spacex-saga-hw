import LAUNCHES from "../utils/types";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case LAUNCHES.ERROR_FETCH:
      return action.error;
    case LAUNCHES.HISTORY_FETCH:
    case LAUNCHES.UPCOMING_FETCH:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
