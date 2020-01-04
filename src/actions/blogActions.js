import {push} from 'connected-react-router'
import endpoint from '../endpoint'

export function fetchArticle(token){
    return dispatch => {
        dispatch({type: "FETCH_ARTICLE_START"});
        fetch(`${endpoint}blog/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if(data){
                //data配列は逆順でreducerに渡す
                const reverseData = data.reverse()
                dispatch({type: "FETCH_ARTICLE_SUCCESS", articles: reverseData})
            } else {
                alert(data.message);
                dispatch({type: "FETCH_ARTICLE_ERROR", error: data.message})
            }
        })
        .catch((err) => {
            dispatch({type: "FETCH_ARTICLE_ERROR", error: err});
        })
    }
}

export function article_create(title, article, image, user){
    return dispatch => {
        dispatch({type: "ARTICLE_POST_START"});
        //localstrage からtokenを取得する
        const token = localStorage.token;
        //現在のユーザー情報idを取得
        const user_id = user.id
        let formData = new FormData()
        formData.append('title',title);
        formData.append('article', article);
        formData.append('user', user_id);
        if(image){
            formData.append('image', image);
        }

        fetch(`${endpoint}blog/`, {
    
            method: 'POST',
            headers: {
                'Authorization': `JWT ${token}`
            },
            body: formData
        })
        .then((res) => res.json())
        .then((data) => {
            if(data){
                dispatch(push('/blog'));
            } else {
                alert(data.message);
                dispatch({type: "FETCH_ARTICLE_ERROR", error: data.message})
            }
        })
        .catch((err) => {
            dispatch({type: "FETCH_ARTICLE_ERROR", error: err});
        })
    }
}

export function article_update(id, title, article, image, user){
    return dispatch => {
        dispatch({type: "ARTICLE_POST_START"});
        //localstrage からtokenを取得する
        const token = localStorage.token;
        //現在のユーザー情報idを取得
        const user_id = user.id

        let formData = new FormData()
        formData.append('title',title);
        formData.append('article', article);
        formData.append('user', user_id);

        if(image){
            formData.append('image', image);
        }

        fetch(`${endpoint}blog/${id}/`, {
    
            method: 'PUT',
            headers: {
                'Authorization': `JWT ${token}`
            },
            body: formData
        })
        .then((res) => res.json())
        .then((data) => {
            if(data){
                //ここでget処理=>storeを取得し直す
                dispatch(push('/blog'));
            } else {
                alert(data.message);
                dispatch({type: "FETCH_ARTICLE_ERROR", error: data.message})
            }
        })
        .catch((err) => {
            dispatch({type: "FETCH_ARTICLE_ERROR", errpr: err});
        })
    }
}

export function articleDelete(article_id){
    return dispatch => {
        dispatch({type: "FETCH_ARTICLE_START"});
        const token = localStorage.token;
        fetch(`${endpoint}blog/${article_id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
            }
        })
        // .then((res) => res.json())
        .then(() => {
            //削除したらもう一度記事一覧をgetする
            fetch(`${endpoint}blog/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
            }
            })
            .then((res) => res.json())
            .then((data) => {
                if(data){
                    dispatch({type: "FETCH_ARTICLE_SUCCESS", articles: data})
                } else {
                    alert(data.message);
                    dispatch({type: "FETCH_ARTICLE_ERROR", error: data.message})
                }
            })
            .catch((err) => {
                dispatch({type: "FETCH_ARTICLE_ERROR", error: err});
            })
                dispatch(push('/blog'));
        })
        .catch((err) => {
            dispatch({type: "FETCH_ARTICLE_ERROR", error: err});
        })
    }
}