import {push} from 'connected-react-router'
export function fetchTodo(token){
    return dispatch => {
        dispatch({type: "FETCH_TODO_START"});
        fetch('http://localhost:8000/api/blog/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if(data){
                dispatch({type: "FETCH_TODO_SUCCESS", todos: data})
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

export function postTodo(title, body, user){
    return dispatch => {
        dispatch({type: "TODO_POST_START"});
        const token = localStorage.token;


        fetch('http://localhost:8000/api/entries/', {
    
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    title: title,
                    body: body,
                    user: user,
                }
            )
        })
        .then((res) => res.json())
        .then((data) => {
            if(data){
                var token = localStorage.token;
                dispatch({type: "TODO_POST_SUCCESS", token: token});
                dispatch(push('/todos'));
            } else {
                alert(data.message);
                dispatch({type: "TODO_POST_ERROR", error: data.message})
            }
        })
        .catch((err) => {
            dispatch({type: "TODO_POST_ERROR", errpr: err});
        })
    }
}