import { SAGA_POPULAR_TVSHOW, SAGA_TOPRATED_TVSHOW } from "../constant";

const initialState = {
    PopularTvShow: [],
    TopRatedTvShow: [],

}
export const TvShow = (state = initialState, action) => {

    switch (action.type) {

        case SAGA_POPULAR_TVSHOW:
            if (action.count === 1) {
                return { PopularTvShow: [...action.data.results] }
            } else {
                return { PopularTvShow: [...state.PopularTvShow, ...action.data.results] }
            }
            break;

        case SAGA_TOPRATED_TVSHOW:
            if (action.count === 1) {
                return { TopRatedTvShow: [...action.data.results] }
            } else {
                return { TopRatedTvShow: [...state.TopRatedTvShow, ...action.data.results] }
            }
            break;
        default:
            return state
            break;
    }
}