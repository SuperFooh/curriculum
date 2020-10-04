import React from 'react'
import Styles from './Sidebar.module.css'
import Profile from './Profile'

const Sidebar = () => {
    return (
        <aside className={Styles.container}>
            <Profile />
        </aside>
    )
}

export default Sidebar
