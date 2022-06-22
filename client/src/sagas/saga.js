import { call, takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import {
  requestRepo,
  requestRepoSuccess,
  requestRepoFail,
} from "../actions/repoAction";

function* fetchRepo(action) {
  try {
    yield put(requestRepo());
    const result = yield call(() => {
      return axios.get(
        `https://api.github.com/orgs/reactjs/repos?per_page=100&sort=full_name`
      );
    });
    yield put(requestRepoSuccess(result));
  } catch (error) {
    yield put(requestRepoFail(error));
  }
}

function* mySaga() {
  yield takeEvery("REPO_FETCH_REQUESTED", fetchRepo);
}

export default mySaga;
