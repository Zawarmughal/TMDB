import { takeEvery, put } from "redux-saga/effects";
import { POPULAR_PEOPLE_URL, API_KEY } from "../services/URL";
import axios from "axios";
import { SAGA_POPULAR_PEOPLES, POPULAR_PEOPLES } from "../constant";

function* popularPeoples(props) {
  const data = yield axios({
    url: POPULAR_PEOPLE_URL,
    method: "get",
    params: {
      page: props.count,
      api_key: API_KEY,
      language: "en - US",
    },
  });
  yield put({
    type: SAGA_POPULAR_PEOPLES,
    data: data.data,
    count: props.count,
  });
}

export default function* PeopleSaga() {
  yield takeEvery(POPULAR_PEOPLES, popularPeoples);
}
