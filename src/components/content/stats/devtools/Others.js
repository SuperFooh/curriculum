import React from 'react'
import Styles from './Others.module.css' 
import devtools from '../../../../config/devtools.config'

const Others = () => {
    return (
        <div className={Styles.container}>
            <ul className={Styles.devtoolList}>
                {Object.keys(devtools).map((devtool)=>{
                    let Icon = devtool.icon;
                    return(
                        <li className={Styles.devtoolItem} key={devtool.id}>
                            <div className={Styles.devtoolInfo}>
                                <Icon className={Styles.devtoolIcon}/>
                                <span className={Styles.devToolDescription}>{devtool.text}</span>
                            </div>
                            <div className={Styles.devtoolProgress}>
                                <span className={Styles.progressDot}/>
                                <span className={Styles.progressDot}/>
                                <span className={Styles.progressDot}/>
                                <span className={Styles.progressDot}/>
                                <span className={Styles.progressDot}/>
                                <span className={Styles.progressDot}/>
                                <span className={Styles.progressDot}/>
                                <span className={Styles.progressDot}/>
                                <span className={Styles.progressDot}/>
                                <span className={Styles.progressDot}/>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Others
