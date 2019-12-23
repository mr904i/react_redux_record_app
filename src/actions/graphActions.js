export function getHourSteps(token,date){
    return dispatch => {
        dispatch({type: "FETCH_GRAPH_START"});
        fetch(`http://localhost:8000/api/fitbit/hoursteps/filter/?id=&hour_steps=&time=&string_date=${date}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
            }
        })
        .then((res) => res.json())
        .then((data) => {
            //以下はdataの形を見てからかく
            
            if(data){

                //hour_steps_data配列の定義
                let hour_steps_data = [{'hour': ''}];
                for(let i = 0; i < data.length; i++) {
                    let hour = i.toString()
                    let one_hour_steps = {'hour': hour, 'steps': data[i].hour_steps}
                    hour_steps_data[i+1] = one_hour_steps
                }

                dispatch({type: "FETCH_HOURSTEPS_SUCCESS", hour_steps_data: hour_steps_data})
            } else {
                alert(data.message);
                dispatch({type: "FETCH_GRAPH_ERROR", error: data.message})
            }
        })
        .catch((err) => {
            dispatch({type: "FETCH_GRAPH_ERROR", error: err});
        })
    }
}