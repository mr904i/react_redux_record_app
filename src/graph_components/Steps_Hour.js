import React, {Component} from 'react';
import { ComposedChart , CartesianGrid, Legend,Tooltip, Bar, XAxis, YAxis } from 'recharts'


class Steps_Hour extends Component {
    render() {
        //actionで歩数のみ取得して歩数を割り振る
        const data = [
            {'hour': ''},
            {'hour': '0', 'steps': 680},
            {'hour': '1', 'steps': 800},
            {'hour': '2', 'steps': 967},
            {'hour': '3', 'steps': 1098},
            {'hour': '4', 'steps': 1200},
            {'hour': '5', 'steps': 1108},
            {'hour': '6', 'steps': 680},
            {'hour': '7', 'steps': 680},
            {'hour': '8', 'steps': 680},
            {'hour': '9', 'steps': 680},
            {'hour': '10', 'steps': 680},
            {'hour': '11', 'steps': 680},
            {'hour': '12', 'steps': 680},
            {'hour': '13', 'steps': 680},
            {'hour': '14', 'steps': 680},
            {'hour': '15', 'steps': 680},
            {'hour': '16', 'steps': 680},
            {'hour': '17', 'steps': 680},
            {'hour': '18', 'steps': 680},
            {'hour': '19', 'steps': 680},
            {'hour': '20', 'steps': 680},
            {'hour': '21', 'steps': 680},
            {'hour': '22', 'steps': 680},
            {'hour': '23', 'steps': 680},
            

            // {hour: 'next hour', '予測': 1200}
        ];
      return (
        <div className="Chart">
            <h1>YOUR STEPS IN A DAY</h1>
            <ComposedChart //グラフ全体のサイズや位置、データを指定。場合によってmarginで上下左右の位置を指定する必要あり。
                width={800}  //グラフ全体の幅を指定 x
                height={280}  //グラフ全体の高さを指定
                data={data} //ここにArray型のデータを指定
                margin={{ top: 20, right: 60, bottom: 0, left: 0 }}  //marginを指定
            >
                <XAxis
                    dataKey='hour'  //Array型のデータの、X軸に表示したい値のキーを指定
                />
                <YAxis />
                <Tooltip /> 
                <Legend />
                <CartesianGrid //グラフのグリッドを指定
                    stroke="#f5f5f5" //グリッド線の色を指定
                />
                <Bar //棒グラフ
                    dataKey="steps"　//Array型のデータの、Y軸に表示したい値のキーを指定
                    barSize={20}  //棒の太さを指定
                    stroke="rgba(34, 80, 162, 0.2)" ////レーダーの線の色を指定 
                    fillOpacity={1}  //レーダーの中身の色の薄さを指定
                    fill="#2250A2" ////レーダーの中身の色を指定
                />
                {/* <Bar //予測用の棒グラフ
                    dataKey="予測"　//Array型のデータの、Y軸に表示したい値のキーを指定
                    barSize={20}  //棒の太さを指定
                    stroke="rgba(34, 80, 162, 0.2)" ////レーダーの線の色を指定 
                    fillOpacity={1}  //レーダーの中身の色の薄さを指定
                    fill="#ff0000" ////レーダーの中身の色を指定
                /> */}
            </ComposedChart>
        </div>
      )
    }
  }

export default Steps_Hour;