import React from 'react'
import Styles from './About.module.css'
import {MdShare} from 'react-icons/md'
const About = () => {
    return (
        <article className={Styles.container}>
            <h2 className={Styles.title}>ABOUT ME</h2>
            <button className={Styles.shareButton}>
                <span className={Styles.shareButtonText}>Compartir</span>
                <MdShare  className={Styles.shareIcon}/>
            </button>
            <h3 className={Styles.subtitle}>Hola, mi nombre es <strong>Manuel Ibar</strong></h3>
            <p className={Styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <span className={Styles.signature}>Manuel Ibar</span>
        </article>
    )
}

export default About
