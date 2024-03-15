import {RotatingLines} from 'react-loader-spinner';
import { useEffect, useState } from "react";
import TableCoins from "./TableCoins";
import {getCoins} from '../services/cryptoApi';
import styles from './HomePage.module.css';
import Pagination from './Pagination';
import Search from './Search';
import Chart from './Chart';
const HomePage = () => {
    const [page,setPage]= useState(1);
    const [coins,setCoins]= useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [currency , setCurrency] = useState('usd');

    const [chart , setChart] = useState(null);
    useEffect(()=>{
         setIsLoading(true);
         const fetchCoins = async () =>{
         const res = await fetch(getCoins(page , currency));
         const json = await res.json();
           setCoins(json);
           setIsLoading(false);
        }
        fetchCoins();
    },[page , currency]);
    return ( 
        <div>
            <Search currency={currency} setCurrency={setCurrency} />
            {isLoading && <div className={styles.loading}><RotatingLines strokeColor="#3874ff" strokeWidth='2' /></div> }
            <TableCoins coins={coins} currency={currency} setChart={setChart}/>
            <Pagination page={page} setPage={setPage}/>
            {chart && <Chart chart={chart} setChart={setChart}/>}
        </div>
     );
}
 
export default HomePage;