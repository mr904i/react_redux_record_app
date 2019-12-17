import {push} from 'connected-react-router'

export function login(email, password){
    return dispatch => {
        dispatch({type: "LOGIN_START"});
        fetch('http://localhost:8000/api/signin/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    email: email,
                    password: password
                }
            )
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.token){
                const token = data.token;
                const user = data.user;
                //localstrageにtokenを保存
                localStorage.setItem('token', token);
                debugger;
                //dispatchはreducerにactionオブジェクトにdispatchないの情報を格納して渡す
                dispatch({type: "LOGIN_SUCCESS", token: token, user: user});
                dispatch(push('/todos'));
            } else {
                alert(data.message);
                dispatch({type: "LOGIN_ERROR", error: data.message})
            }
        })
        .catch((err) => {
            dispatch({type: "LOGIN_ERROR", errpr: err});
        })
    }
}
export function logout(){
    localStorage.removeItem('token');
    return {type: "LOGOUT"};
}