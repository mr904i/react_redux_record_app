import {push} from 'connected-react-router'
import endpoint from '../endpoint'
export function signup(email, username, date_of_birth, height, weight, password){
    return dispatch => {
        dispatch({type: "SIGNUP_START"});
        fetch(`${endpoint}signup/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
                {
                    email: email,
                    username: username,
                    date_of_birth: date_of_birth,
                    height: height,
                    weight: weight,
                    password: password,
                }
            )
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.token){
                const token = data.token;
                //プロパティを作成
                const user = {}
                user.id = data.id
                user.email = data.email;
                user.username = data.username;
                user.date_of_birth = data.date_of_birth;
                user.height = data.height;
                user.weight = data.weight;

                //localstrageにtokenを保存
                localStorage.setItem('token', token);
                //dispatchはreducerにactionオブジェクトにdispatchないの情報を格納して渡す
                dispatch({type: "SIGNUP_SUCCESS", token: token, user: user});
                dispatch(push('/blog'));
            } else {
                alert(data.message);
                dispatch({type: "SIGNUP_ERROR", error: data.message})
            }
        })
        .catch((err) => {
            dispatch({type: "SIGNUP_ERROR", errpr: err});
        })
    }
}

export function login(email, password){
    return dispatch => {
        dispatch({type: "LOGIN_START"});
        fetch(`${endpoint}signin/`, {
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
                //dispatchはreducerにactionオブジェクトにdispatchないの情報を格納して渡す
                dispatch({type: "LOGIN_SUCCESS", token: token, user: user});
                dispatch(push('/blog'));
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