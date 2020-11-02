import React, {createRef} from 'react'
import Layout from './Layout'
import ProfileCard from './ProfileCard'

const Root = () => {
    const viewportRef = createRef();
    return (
        <div style={{height: "100vh", width: "100vw"}} ref={viewportRef}>
            <Layout viewportRef={viewportRef}>
                <ProfileCard />
            </Layout>
        </div>
    )
}

export default Root
