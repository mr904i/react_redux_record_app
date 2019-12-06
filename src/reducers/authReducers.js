const initState = {
    processing: false,
    token: null,
    user: null,
    error: null
}

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case "LOGIN_START":
            return{
                ...state,
                proccesssing: true
            };
        case "LOGIN_SUCCESS":
            return{
                ...state,
                proccesssing: false,
                token: action.token,
                user: action.user,
            };
        case "LOGIN_ERROR":
            return{
                ...state,
                proccesssing: false,
                error: action.error
            };
        case "LOGOUT":
            return{
                ...state,
                token: null
            };
        default:
            return state;
    }
}

export default authReducer;