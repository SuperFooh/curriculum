import React from 'react'
import Styles from './MainContent.module.css'
import About from './content/About'
import Stats from './content/stats/Stats'

const MainContent = () => {
    return (
        <main className={Styles.container}>
            <About />
            <Stats /> 
        </main>
    )
}

export default MainContent
