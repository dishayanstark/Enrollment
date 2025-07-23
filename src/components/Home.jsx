import React from 'react'
import styles from "../styles/home.module.css"
const Home = () => {
  return (
    <> 
        <div className={styles.home}>
        <h2>STARK INDUSTRIES</h2>
        <h2>COURSES OFFERED</h2><br/>
        <div className={styles.box}>
            <ul>
                <li>Bachelor of Computer Applications (BCA)</li>
                <li>Bachelor of Commerce (B.Com)</li>
                <li>Bachelor of Arts (BA)</li>
                <li>Bachelor of Science (BSc)</li>
                <li>Bachelor of Business Administration (BBA)</li>
                <li>Bachelor of Hotel Management (BHM)</li>
            </ul>
        </div>
        </div>
    </>
  )
}

export default Home