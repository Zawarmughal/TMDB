import { takeEvery, put } from "redux-saga/effects";
import { API_KEY, MULTI_SEARCH_URL } from "../services/URL";
import axios from "axios";
import { SAGA_MULTI_SEARCH, MULTI_SEARCH } from "../constant";

function* multiSearch(props) {
  const data = yield axios({
    url: MULTI_SEARCH_URL,
    method: "get",
    params: {
      api_key: API_KEY,
      language: "en - US",
      query: props.word,
      include_adult: false,
    },
  });
  yield put({
    type: SAGA_MULTI_SEARCH,
    data: data.data,
  });
}

export default function* MultiSearchSaga() {
  yield takeEvery(MULTI_SEARCH, multiSearch);
}
