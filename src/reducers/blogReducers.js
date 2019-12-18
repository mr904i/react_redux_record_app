const initState = {
    fetching: false,
    fetched: false,
    articles: [],
    error: null,
    token: null,
}

const blogReducer = (state = initState, action) => {
    switch(action.type){
        //get
        case "FETCH_TODO_START":
            return{
                ...state,
                fetching: true
            };
        case "FETCH_TODO_SUCCESS":
            return{
                ...state,
                fetching: false,
                fetched: true,
                articles: action.articles
            };
        case "FETCH_TODO_ERROR":
            return{
                ...state,
                fetching: false,
                error: action.error
            };      
        default:
            return state;
    }
}

export default blogReducer;