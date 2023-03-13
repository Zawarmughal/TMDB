import { SAGA_MULTI_SEARCH } from "../constant";

const initialState = {
    multiSearch: [],
}
export const MultiSearch = (state = initialState, action) => {
    
    switch (action.type) {
        
        case SAGA_MULTI_SEARCH:
            return { multiSearch: [...action.data.results] }
            break;
        default:
            return state
            break;
    }
}