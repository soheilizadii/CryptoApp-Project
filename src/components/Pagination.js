import { useState } from "react";
import styles from './Pagination.module.css';
const Pagination = ({page,setPage}) => {
    return ( 
        <div className={styles.container}>
            <button onClick={page> 1 ? ()=>setPage(page-1) : null } className={page == 1 ? styles.disabled : null}>Previous</button>
            <p onClick={()=>setPage(1)} className={page==1 ? styles.selected : null} >1</p>
            <p onClick={()=>setPage(2)} className={page==2 ? styles.selected : null}>2</p>
            {page > 2 && page < 9 && 
                <>          
                <span>...</span>
                <p  className={ styles.selected}>{page}</p>
                </>
            }
            <span>...</span>
            <p  onClick={()=>setPage(9)}  className={page==9 ? styles.selected : null}>9</p>
            <p onClick={()=>setPage(10)}   className={page==10 ? styles.selected : null}>10</p>
            <button onClick={page < 10 ?()=> setPage(page+1) : null} className={page == 10 ? styles.disabled : null}>Next</button>
        </div>
     );
}
 
export default Pagination;