import { useEffect, useState } from 'react';
import styles from './Search.module.css';
import {searchCoins} from '../services/cryptoApi'
import { RotatingLines } from 'react-loader-spinner';
const Search = ({currency,setCurrency}) => {
    const [search,setSearch]= useState('');
    const [coins,setCoins] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    useEffect(()=>{
        const controller = new AbortController();
        setCoins([]);
        if (!search){
            setIsLoading(false);
            return;
        } 
        const searchHandler = async ()=>{
            try{
                const res = await fetch(searchCoins(search) , {signal : controller.signal} );
                const json = await res.json();
                if(json.coins) setCoins(json.coins);
                setIsLoading(false);
            }
            catch(erorr){
                if(erorr.name !== "AbortError" )
                alert(erorr.message)
            }
        }
        setIsLoading(true);
        searchHandler();
        return () => {
            controller.abort();
        };
    },[search]);
    return ( 
        <div className={styles.container}>
            <input type="text" placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}  />
            <select onChange={(e)=> setCurrency(e.target.value) }>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
            </select>
            {(!!coins.length || isLoading  )&& (<div className={styles.searchResult}>
                <div className={styles.loading}>{isLoading && <RotatingLines  width="50px" height="50px" strokeColor='#3874ff' strokeWidth='2'/>}</div>
                <ul>
                    {coins.map((coin)=> 
                      <li>
                        <img src={coin.thumb}  alt={coin.name}/>
                        <p>{coin.name}</p>
                      </li> )}
                </ul>
            </div>) }
            
        </div>
     );
}
 
export default Search;
