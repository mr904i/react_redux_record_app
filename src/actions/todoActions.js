import {push} from 'connected-react-router'
export function fetchTodo(token){
    return dispatch => {
        dispatch({type: "FETCH_TODO_START"});
        debugger;
        fetch('http://localhost:8000/api/entries/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        
        .then((res) => res.json())
        .then((data) => {
            if(data.results){
                dispatch({type: "FETCH_TODO_SUCCESS", todos: data.results})
            } else {
                alert(data.message);
                dispatch({type: "FETCH_TODO_ERROR", error: data.message})
            }
        })
        .catch((err) => {
            dispatch({type: "FETCH_TODO_ERROR", error: err});
        })
    }
}

// export function postTodo(title, body){
//     return dispatch => {
//         dispatch({type: "TODO_POST_START"});
//         debugger;
//         var token = localStorage.token;
//         //user_idの取り出し
//         function parseJwt (token) {
//             var base64Url = token.split('.')[1];
//             var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//             var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
//                 return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
//             }).join(''));
        
//             return JSON.parse(jsonPayload);
//         };
//         const current_user = parseJwt(token);
//         debugger;
//         const user = current_user.user_id
//         debugger;

//         fetch('http://localhost:8000/api/entries/', {
    
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(
//                 {
//                     title: title,
//                     body: body,
//                     user: user,
//                 }
//             )
//         })
//         .then((res) => res.json())
//         .then((data) => {
//             debugger;
//             if(data){
//                 debugger;
//                 var token = localStorage.token;
//                 dispatch({type: "TODO_POST_SUCCESS", token: token});
//                 dispatch(push('/todos'));
//             } else {
//                 alert(data.message);
//                 dispatch({type: "TODO_POST_ERROR", error: data.message})
//             }
//         })
//         .catch((err) => {
//             dispatch({type: "TODO_POST_ERROR", errpr: err});
//         })
//     }
// }