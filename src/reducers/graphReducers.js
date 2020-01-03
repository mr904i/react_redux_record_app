const initState = {
    fetching: false,
    fetched: false,
    hour_steps_data: null,
    error: null,
    token: null,
}

const graphReducer = (state = initState, action) => {
    switch(action.type){
        case "FETCH_GRAPH_START":
            return{
                ...state,
                fetching: true
            };
        case "FETCH_HOURSTEPS_SUCCESS":
            return{
                ...state,
                fetching: false,
                fetched: true,
                hour_steps_data: action.hour_steps_data,
                hour_steps_sum_data: action.hour_steps_sum_data
            };
        case "FETCH_GRAPH_ERROR":
            return{
                ...state,
                fetching: false,
                error: action.error
            };
        default:
            return state;
    }
}

export default graphReducer;