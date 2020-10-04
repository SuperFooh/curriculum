import React from 'react'
import profileImage from '../../../assets/profile.jpg'
import Styles from './Profile.module.css'

const Profile = () => (
    <section className={Styles.container}>
        <div className={Styles.heroImage}>
            <img className={Styles.profilePicture} src={profileImage} alt="profile" />
        </div>
    </section>
)


export default Profile
