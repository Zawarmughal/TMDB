import { SAGA_TRENDING } from "../constant";

const initialState = {
    Trending: [],
}
export const Dashboard = (state = initialState, action) => {
    
    switch (action.type) {
        
        case SAGA_TRENDING:
            return { Trending: [...action.data.results] }
            break;
        default:
            return state
            break;
    }
}