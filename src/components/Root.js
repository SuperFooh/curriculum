import React, {useRef} from 'react'
import Styles from './Root.module.css'
import Layout from './Layout'
import ProfileCard from './ProfileCard'
import MainContent from './MainContent'
import Navigation from './nav/Nav'

const Root = () => {
    const viewportRef = useRef();
    return (
        <div className={Styles.container} ref={viewportRef}>
            <Layout viewportRef={viewportRef}>
                <ProfileCard />
                <MainContent />
                <Navigation />
            </Layout>
        </div>
    )
}

export default Root
