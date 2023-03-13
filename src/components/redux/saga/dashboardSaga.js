import { takeEvery, put } from "redux-saga/effects";
import { SAGA_TRENDING, TRENDING } from "../constant";
import { TRENDING_URL, API_KEY } from "../services/URL";
import axios from "axios";

function* trending() {
  const data = yield axios({
    url: TRENDING_URL,
    method: "get",
    params: {
      api_key: API_KEY,
      language: "en - US",
    },
  });
  yield put({
    type: SAGA_TRENDING,
    data: data.data,
  });
}

export default function* DashboardSaga() {
  yield takeEvery(TRENDING, trending);
}
