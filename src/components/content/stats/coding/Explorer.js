import React from 'react'
import Styles from './Explorer.module.css'

const Explorer = ({selectedLanguage}) => {
    return (
        <div className={Styles.container}>
            {selectedLanguage && (()=> {
                let Icon = selectedLanguage.icon
                return (<>
                    <div className={Styles.graphsSection}>
                        <div className={Styles.mainGraph}>
                            <svg>
                                <circle cx="50%" cy="50%" r="100px"/>
                                {/* <circle cx="40" cy="30"  r="20"/> */}
                            </svg>
                            {/* <Icon className={Styles.Icon}/> */}
                        </div>
                        <div className={Styles.secondaryGraphs}>

                            <div className={Styles.amount}>projects</div>
                            <div className={Styles.amount}>certificates</div>
                        </div>
                    </div>
                    <ul>
                        
                    </ul>
                </>)

            })()}
        </div>    
    )
}

export default Explorer
