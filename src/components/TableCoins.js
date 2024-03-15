import { useState } from 'react';
import styles from './TableCoins.module.css';
import { chartCoins } from '../services/cryptoApi';
const TableCoins = ({coins,currency,setChart}) => {
    const clickHandler =async (coin) =>{
         try{
             const res = await fetch(chartCoins(coin.id));
             const json =await res.json();
             setChart({... json , coin:coin});
         }
         catch(error){
          alert(error.message);
         }
    };
    return ( 
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>coin</th>
                        <th>name</th>
                        <th>price</th>
                        <th>24h</th>
                        <th>totalvalue</th>
                    </tr>
                </thead>
                <tbody>
                     {coins.map((coin)=>
                              <tr onClick={()=>clickHandler(coin)} key={coin.id}> 
                                 <td><img className={styles.coinImage} src={coin.image} /><span className={styles.symbol}>{coin.symbol}</span></td>
                                 <td>{coin.name}</td>
                                 <td>{currency == 'usd' ? '$' : currency == 'eur' ?  'Є'  : '¥'} {coin.current_price.toLocaleString()}</td>
                                 <td className={coin.price_change_24h > 0 ? styles.green : styles.red }>{coin.price_change_24h.toFixed(2)} %</td>
                                 <td>${coin.total_volume.toLocaleString()}</td>
                              </tr>
                     )}
                </tbody>
            </table>
        </div>
     );
}
 
export default TableCoins;