import React from 'react'
import Styles from './Favorites.module.css'
import {FaGitAlt, FaDocker} from 'react-icons/fa'
import {SiVisualstudiocode} from 'react-icons/si'

const Favorites = () => {
    return (
        <div className={Styles.favorites}>
        <h3 className={Styles.title}>Favorites 🏆</h3>
        <ul className={Styles.favoriteList}>
            <li style={{color: "#eb4d28"}} className={Styles.favoriteItem}>
                <FaGitAlt className={Styles.favoriteIcon}/> 
                <span className={Styles.favoriteDescription}>Git</span>
            </li>
            <li style={{color: "#2491e6"}} className={Styles.favoriteItem}>
                <FaDocker className={Styles.favoriteIcon}/>
                <span className={Styles.favoriteDescription}>Docker</span>
            </li>
            <li style={{color: "#825cbf"}} className={Styles.favoriteItem}>
                <SiVisualstudiocode className={Styles.favoriteIcon}/>
                <span className={Styles.favoriteDescription}>VS Code</span>
            </li>
        </ul>
    </div>
    )
}

export default Favorites
