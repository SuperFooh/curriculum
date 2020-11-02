import React, {useContext} from 'react'
import Styles from './ProfileCard.module.css'
import {mediaContext} from './Layout'
import profileCard from '../assets/gentleman.jpg'

import {MdEmail, MdPhoneAndroid, MdShare, MdFileDownload} from 'react-icons/md'
import {FiGithub} from 'react-icons/fi'
import {RiLinkedinFill} from 'react-icons/ri'


const ProfileCard = () => {
    const media = useContext(mediaContext)

    return (<section className={Styles.card}>
        <div className={Styles.cardContent}>
            <img className={Styles.image} src={profileCard}/>
            <div className={Styles.intro}>
                <h1 className={Styles.name}>Manuel Ibar</h1>
                <h2 className={Styles.jobTitle}>Fullstack Developer</h2>
            </div>
            <ul className={Styles.contactIcons}>
                <li className={Styles.iconContainer} data-url="linked-in">
                    <RiLinkedinFill className={Styles.icon}/>
                </li>
                <li className={Styles.iconContainer} data-url="email">
                    <MdEmail className={Styles.icon}/>
                </li>
                <li className={Styles.iconContainer} data-url="phone">
                    <MdPhoneAndroid className={Styles.icon}/>
                </li>
                <li className={Styles.iconContainer} data-url="github">
                    <FiGithub className={Styles.icon}/>
                </li>
            </ul>
        </div>
        <div className={Styles.cardFooter}>
            <button className={Styles.downloadButton}>
                <p className={Styles.downloadText}>Descargar CV</p>    
                <MdFileDownload className={Styles.downloadIcon}/>
            </button>
        </div>
    </section>)
}

export default ProfileCard

