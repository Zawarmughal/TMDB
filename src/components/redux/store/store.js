// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "../reducers/rootReducer";
import createSagaMiddleware from "@redux-saga/core";
import MovieSaga from "../saga/movieSaga";
import PeopleSaga from "../saga/peopleSaga";
import TvShowSaga from "../saga/tvShowSaga";
import DashboardSaga from "../saga/dashboardSaga";
import MultiSearchSaga from "../saga/multiSearchSaga";
import DetailsSaga from "../saga/detailSaga";

const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(combineReducers);
export const store = configureStore({
  reducer: combineReducers,
  // middleware: () => [sagaMiddleware]
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(MovieSaga);
sagaMiddleware.run(PeopleSaga);
sagaMiddleware.run(TvShowSaga);
sagaMiddleware.run(DashboardSaga);
sagaMiddleware.run(MultiSearchSaga);
sagaMiddleware.run(DetailsSaga);
