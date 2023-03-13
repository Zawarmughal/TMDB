import { takeEvery, put } from "redux-saga/effects";
import { POPULAR_TVSHOW_URL, TOPRATED_TVSHOW_URL, API_KEY } from "../services/URL";
import axios from "axios";
import {
  SAGA_POPULAR_TVSHOW,
  POPULAR_TVSHOW,
  SAGA_TOPRATED_TVSHOW,
  TOPRATED_TVSHOW,
} from "../constant";

function* PopularTvShow(props) {
  const data = yield axios({
    url: POPULAR_TVSHOW_URL,
    method: "get",
    params: {
      page: props.count,
      api_key: API_KEY,
      language: "en - US",
    },
  });
  yield put({
    type: SAGA_POPULAR_TVSHOW,
    data: data.data,
    count: props.count,
  });
}

function* TopRatedTvShow(props) {
  const data = yield axios({
    url: TOPRATED_TVSHOW_URL,
    method: "get",
    params: {
      page: props.count,
      api_key: API_KEY,
      language: "en - US",
    },
  });
  yield put({
    type: SAGA_TOPRATED_TVSHOW,
    data: data.data,
    count: props.count,
  });
}

export default function* TvShowSaga() {
  yield takeEvery(POPULAR_TVSHOW, PopularTvShow);
  yield takeEvery(TOPRATED_TVSHOW, TopRatedTvShow);
}
