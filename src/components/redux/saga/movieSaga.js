import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import {
  POPULAR_MOVIES_URL,
  UPCOMMING_MOVIES_URL,
  NOWPLAYING_MOVIES_URL,
  TOPRATED_MOVIES_URL,
  API_KEY,
} from "../services/URL";
import {
  SAGA_POPULAR_MOVIES,
  POPULAR_MOVIES,
  SAGA_UPCOMMING_MOVIES,
  UPCOMMING_MOVIES,
  NOWPLAYING_MOVIES,
  SAGA_NOWPLAYING_MOVIES,
  TOPRATED_MOVIES,
  SAGA_TOPRATED_MOVIES,
} from "../constant";

function* popularMovies(props) {
  const data = yield axios({
    url: POPULAR_MOVIES_URL,
    method: "get",
    params: {
      page: props.count,
      api_key: API_KEY,
      language: "en - US",
    },
  });
  yield put({
    type: SAGA_POPULAR_MOVIES,
    data: data.data,
    count: props.count,
  });
}

function* upCommingMovies(props) {
  const data = yield axios({
    url: UPCOMMING_MOVIES_URL,
    method: "get",
    params: {
      page: props.count,
      api_key: API_KEY,
      language: "en - US",
    },
  });
  yield put({
    type: SAGA_UPCOMMING_MOVIES,
    data: data.data,
    count: props.count,
  });
}

function* nowPlayingMovies(props) {
  const data = yield axios({
    url: NOWPLAYING_MOVIES_URL,
    method: "get",
    params: {
      page: props.count,
      api_key: API_KEY,
      language: "en - US",
    },
  });
  yield put({
    type: SAGA_NOWPLAYING_MOVIES,
    data: data.data,
    count: props.count,
  });
}

function* topRatedMovies(props) {
  const data = yield axios({
    url: TOPRATED_MOVIES_URL,
    method: "get",
    params: {
      page: props.count,
      api_key: API_KEY,
      language: "en - US",
    },
  });
  yield put({
    type: SAGA_TOPRATED_MOVIES,
    data: data.data,
    count: props.count,
  });
}

export default function* MovieSaga() {
  yield takeEvery(POPULAR_MOVIES, popularMovies);
  yield takeEvery(UPCOMMING_MOVIES, upCommingMovies);
  yield takeEvery(NOWPLAYING_MOVIES, nowPlayingMovies);
  yield takeEvery(TOPRATED_MOVIES, topRatedMovies);
}
