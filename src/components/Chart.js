import { useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from 'recharts';
import styles from './Chart.module.css';
const Chart = ({chart,setChart}) => {
   console.log(chart);
    const [type,setType]= useState('prices');
    const converData = (type)=>{
        return chart[type].map((item)=>{
            return {
                date:item[0], 
                [type] : item[1]
            }
        })
    }
    const typeHandler =(e)=>{
           const name=e.target.name;
           setType(name);
    }
    return ( 
        <div className={styles.container}>
            < p onClick={()=>setChart(null)} className={styles.delete}>X</p>
            <div className={styles.chart}>
                <div className={styles.name}>
                     <img src={chart.coin.image} />
                     <p>{chart.coin.name}</p>
                </div>
                <div className={styles.graph}>
                   <ResponsiveContainer width="100%" height="100%">
                      <LineChart width={400} height={400} data={converData(type)}>
                            <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth="2px" />
                            <CartesianGrid stroke="#404042"/>
                            <YAxis dataKey={type} domain={["auto" , "auto"]} />
                            <Legend/>
                            <Tooltip/>
                      </LineChart>
                   </ResponsiveContainer>
                </div>
                <div className={styles.types}>
                    <button className={type ==='prices' ? styles.selected : null } name="prices" onClick={typeHandler}>Prices</button>
                    <button className={type ==='total_volumes' ? styles.selected : null } name="total_volumes" onClick={typeHandler}>Total Volumes</button>
                    <button className={type ==='market_caps' ? styles.selected : null } name="market_caps" onClick={typeHandler}>Market Caps</button>
                </div>
                <div className={styles.detail}>
                  <div>
                    <p>Prices:</p>
                    <span> {chart.coin.current_price}</span>
                  </div>
                  <div>
                    <p>ATH:</p>
                    <span> {chart.coin.ath}</span>
                  </div>
                  <div>
                    <p>Market Cap:</p>
                    <span> {chart.coin.market_cap}</span>
                  </div>
                </div>
            </div>
        </div>
     );
}
 
export default Chart;
