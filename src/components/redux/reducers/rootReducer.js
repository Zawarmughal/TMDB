import { combineReducers } from "redux";
import { Movie } from "./movieReducer";
import { Peoples } from "./peopleReducer";
import { TvShow } from "./tvShowReducer";
import { Dashboard } from "./dashboardReducer";
import { MultiSearch } from "./multiSearchReducer";
import { Details } from "./detailReducer";
import { TVShowDetails } from "./detailReducer";

export default combineReducers({
  Movie,
  Peoples,
  TvShow,
  Dashboard,
  MultiSearch,
  Details,
  TVShowDetails,
});
