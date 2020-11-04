import React, {createRef} from 'react'
import Layout from './Layout'
import ProfileCard from './ProfileCard'
import MainContent from './MainContent'
import Navigation from './Navigation'

const Root = () => {
    const viewportRef = createRef();
    return (
        <div style={{height: "100vh", width: "100vw"}} ref={viewportRef}>
            <Layout viewportRef={viewportRef}>
                <ProfileCard />
                <MainContent />
                <Navigation />
            </Layout>
        </div>
    )
}

export default Root
