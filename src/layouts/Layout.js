import styles from './Layout.module.css';
import { FaHeart } from "react-icons/fa";
const Layout = ({children}) => {
    return ( 
        <>
          <header className={styles.header}>
            <h1>Crypto App </h1>
            <p>
                <a href='#'>SoheilReact.js</a> | React.js Full Course
            </p>
          </header>
          {children}
          <footer className={styles.footer}>
            <p>Developed by Soheil <span className={styles.loveIcon}><FaHeart/></span></p>
          </footer>
        </>
     );
}
 
export default Layout;