import rootReducer from "../reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import sagaWatcher from "../redux-saga/sagas";

const configStore = () => {
  const saga = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(saga));
  saga.run(sagaWatcher);
  return store;
};

export default configStore;
