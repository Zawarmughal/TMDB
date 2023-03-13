import { SAGA_POPULAR_MOVIES, SAGA_UPCOMMING_MOVIES, SAGA_NOWPLAYING_MOVIES, SAGA_TOPRATED_MOVIES,} from "../constant";

const initialState = {
    PopularMovies: [],
    upCommingMovies: [],
    nowPlayingMovies: [],
    topRatedMovies: [],
    movieDetail: [],
}
export const Movie = (state = initialState, action) => {

    switch (action.type) {

        case SAGA_POPULAR_MOVIES:
            if (action.count === 1) {

                return { PopularMovies: [...action.data.results] }
            } else {
                return { PopularMovies: [...state.PopularMovies, ...action.data.results] }
            }
            break;

        case SAGA_UPCOMMING_MOVIES:
            if (action.count === 1) {

                return { upCommingMovies: [...action.data.results] }
            } else {
                return { upCommingMovies: [...state.upCommingMovies, ...action.data.results] }
            }
            break;

        case SAGA_NOWPLAYING_MOVIES:
            if (action.count === 1) {

                return { nowPlayingMovies: [...action.data.results] }
            } else {
                return { nowPlayingMovies: [...state.nowPlayingMovies, ...action.data.results] }
            }
            break;

        case SAGA_TOPRATED_MOVIES:
            if (action.count === 1) {

                return { topRatedMovies: [...action.data.results] }
            } else {
                return { topRatedMovies: [...state.topRatedMovies, ...action.data.results] }
            }
            break;

        default:
            return state
            break;
    }
}