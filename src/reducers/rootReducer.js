import errorReducer from "./errorReducer";
import launchReducer from "./launchReducer";
import loadingReducer from "./loadingReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  launches: launchReducer,
  error: errorReducer,
  loading: loadingReducer,
});

export default rootReducer;
