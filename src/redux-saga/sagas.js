import { call, put, takeEvery } from "redux-saga/effects";
import {
  setUpcomingLaunches,
  setHistoryLaunches,
  setError,
  isLoading,
} from "../actions/actions";
import LAUNCHES from "../utils/types";

function* sagaWatcher() {
  yield takeEvery(LAUNCHES.FETCH, sagaWorker);
}

function* sagaWorker(action) {
  try {
    yield put(isLoading());
    const launches = yield call(fetchLaunches, action.offset);
    const upcomingLaunches = launches.filter((launch) => launch.upcoming);
    const historyLaunches = launches.filter((launch) => !launch.upcoming);
    yield put(setUpcomingLaunches(upcomingLaunches));
    yield put(setHistoryLaunches(historyLaunches));
  } catch (error) {
    yield put(setError(error.toString()));
  }
}

async function fetchLaunches(offset) {
  const response = await fetch(
    `https://api.spacexdata.com/v3/launches?sort=launch_date_utc&order=desc&limit=6&offset=${offset}`
  );
  const launches = await response.json();
  return launches;
}

export default sagaWatcher;
