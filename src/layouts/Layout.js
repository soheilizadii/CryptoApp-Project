import styles from './Layout.module.css';
import { FaHeart } from "react-icons/fa";
const Layout = ({children}) => {
    return ( 
        <>
          <header className={styles.header}>
            <h1>Crypto App </h1>
            <p>
                <a href='#'> React.js Full Course</a> 
            </p>
          </header>
          {children}
          <footer className={styles.footer}>
            <p>Developed by Soheil and Sajede <span className={styles.loveIcon}><FaHeart/></span></p>
          </footer>
        </>
     );
}
 
export default Layout;
