import React, {createContext, useEffect, useState}  from 'react'
import './normalize.css'
import Styles from './Layout.module.css'
import getMedia from '../utils/getMedia'

export const mediaContext = createContext();

export default ({children, viewportRef}) => {
    
    const [media, setMedia] = useState(false)
    
    useEffect(()=> setMedia(getMedia(viewportRef)),[viewportRef] )

    return(
        <mediaContext.Provider value={media}>
            <div className={Styles.mainContainer} >
                <div className={Styles.test}/>
                <div className={Styles.test2} />
                <div className={Styles.test3} />
                {children}
            </div>
        </mediaContext.Provider>
    )
}

