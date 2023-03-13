import { SAGA_DETAIL, SAGA_TVSHOW_DETAIL } from "../constant";

const initialState = {
    Detail: [],
    MovieReview: [],
    tvShowDetail: [],
}
export const Details = (state = initialState, action) => {

    switch (action.type) {

        case SAGA_DETAIL:
            {
                return( { Detail: action.data , MovieReview: action.data2 })
            }
            break;
        default:
            return state
            break;
    }
}
export const TVShowDetails = (state = initialState, action) => {

    switch (action.type) {

        case SAGA_TVSHOW_DETAIL:
            {
                return { tvShowDetail: action.data }
            }
            break;
        default:
            return state
            break;
    }
}