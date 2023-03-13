import { SAGA_POPULAR_PEOPLES } from "../constant";

const initialState = {
    PopularPeoples: [],
}
export const Peoples = (state = initialState, action) => {

    switch (action.type) {

        case SAGA_POPULAR_PEOPLES:
            if (action.count === 1) {
                return { PopularPeoples: [...action.data.results] }
            } else {
                return { PopularPeoples: [...state.PopularPeoples, ...action.data.results] }
            }
            break;
        default:
            return state
            break;
    }
}