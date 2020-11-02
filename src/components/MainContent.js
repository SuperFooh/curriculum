import React from 'react'
import Styles from './MainContent.module.css'
import About from './content/About'

const MainContent = () => {
    return (
        <main className={Styles.container}>
            <About />
        </main>
    )
}

export default MainContent
