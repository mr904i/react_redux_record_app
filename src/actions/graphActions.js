import endpoint from '../endpoint'
export function getHourSteps(token,date){
    return dispatch => {
        dispatch({type: "FETCH_GRAPH_START"});
        fetch(`${endpoint}fitbit/hoursteps/?string_date=${date}`, {
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

                //歩数合計値の定義
                let hourArray =[];
                for(let i = 0; i < data.length; i++) {
                    let step = data[i].hour_steps
                    hourArray.push(step)
                }
                //合計値の算出
                let sumHour = hourArray.reduce((total, data) => {return total + data});

                dispatch({type: "FETCH_HOURSTEPS_SUCCESS", hour_steps_data: hour_steps_data, hour_steps_sum_data: sumHour })
            } else {
                //hour_steps_data配列の定義
                let hour_steps_data = null;
                let sumHour = null;
                dispatch({type: "FETCH_GRAPH_NODATA", hour_steps_data: hour_steps_data, hour_steps_sum_data: sumHour})
            }
        })
        .catch((err) => {
            //データがない場合は既存のstoreを上書き
            let hour_steps_data = null;
            let sumHour = null;
            dispatch({type: "FETCH_GRAPH_ERROR", error: err, hour_steps_data: hour_steps_data, hour_steps_sum_data: sumHour});
        })
    }
}