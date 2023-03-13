import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { DETAIL_URL, TV_DETAIL_URL, API_KEY } from "../services/URL";
import {
  DETAIL,
  SAGA_DETAIL,
  TVSHOW_DETAIL,
  SAGA_TVSHOW_DETAIL,
} from "../constant";

function* DetailSaga(props) {
  const data = yield axios({
    url: DETAIL_URL + props.id,
    method: "get",
    params: {
      api_key: API_KEY,
      language: "en - US",
    },
  });
  const data2 = yield axios({
    url: `https://api.themoviedb.org/3/movie/${props.id}}/reviews`,
    method: "get",
    params: {
      api_key: API_KEY,
      language: "en - US",
    },
  });
  yield put({
    type: SAGA_DETAIL,
    data: data.data,
    data2: data2.data,
  });
}

function* TvDetailSaga(props) {
  const data = yield axios({
    url: TV_DETAIL_URL + props.id,
    method: "get",
    params: {
      api_key: API_KEY,
      language: "en - US",
    },
  });
  yield put({
    type: SAGA_TVSHOW_DETAIL,
    data: data.data,
  });
}

export default function* DetailsSaga() {
  yield takeEvery(DETAIL, DetailSaga);
  yield takeEvery(TVSHOW_DETAIL, TvDetailSaga);
}
