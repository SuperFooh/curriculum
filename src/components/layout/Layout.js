import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Styles from './Layout.module.css'
import './normalize.css'

export default ({children}) => (
    <div className={Styles.mainContainer}>
        <Sidebar />
        {children}
    </div>
)
