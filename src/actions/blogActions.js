import {push} from 'connected-react-router'
export function fetchArticle(token){
    return dispatch => {
        dispatch({type: "FETCH_ARTICLE_START"});
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
                dispatch({type: "FETCH_ARTICLE_SUCCESS", articles: data})
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

export function ariticle_create(title, article, user){
    return dispatch => {
        dispatch({type: "ARTICLE_POST_START"});
        //localstrage からtokenを取得する
        const token = localStorage.token;
        //現在のユーザー情報idを取得
        const user_id = user.id

        fetch('http://localhost:8000/api/blog/', {
    
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
            },
            body: JSON.stringify(
                {
                    title: title,
                    article: article,
                    user: user_id,
                }
            )
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
            dispatch({type: "FETCH_ARTICLE_ERROR", errpr: err});
        })
    }
}

export function articleDelete(article_id){
    return dispatch => {
        dispatch({type: "FETCH_ARTICLE_START"});
        const token = localStorage.token;
        fetch(`http://localhost:8000/api/blog/${article_id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
            }
        })
        // .then((res) => res.json())
        .then(() => {
            //削除したらもう一度記事一覧をgetする
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