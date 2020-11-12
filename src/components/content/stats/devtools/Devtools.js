import React from 'react'
import Styles from './Devtools.module.css'
import Favorites from './Favorites'
import Others from './Others'

const Devtools = () => {
    return (
        <div className={Styles.container} id="devtools">
            <Favorites />
            <Others />
        </div>
    )
}

export default Devtools
