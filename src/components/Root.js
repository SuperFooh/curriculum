import React, {createRef} from 'react'
import Layout from './Layout'
import ProfileCard from './ProfileCard'
import MainContent from './MainContent'

const Root = () => {
    const viewportRef = createRef();
    return (
        <div style={{height: "100vh", width: "100vw"}} ref={viewportRef}>
            <Layout viewportRef={viewportRef}>
                <ProfileCard />
                <MainContent />
            </Layout>
        </div>
    )
}

export default Root
