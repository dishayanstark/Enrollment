import React from "react"
import { Link } from "react-router-dom";
import styles from "../styles/nav.module.css"

const Nav=()=>{
    return(
        <>
        <nav>
            <div className={styles.logo}><img src={""} alt="Logo"/></div>
            <div className={styles.menu}>
                <ol>
                    <li><Link to={"/"} className={styles.link}>Home</Link></li>
                    <li><Link to={"/add/users"} className={styles.link}>Add Students</Link></li>
                    <li><Link to={"/view/users"} className={styles.link}>View Students</Link></li>
                </ol>
            </div>
        </nav>
        
        </>
    )
}
export default Nav;