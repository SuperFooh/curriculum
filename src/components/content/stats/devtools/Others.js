import React from 'react'
import Styles from './Others.module.css' 
import devtools from '../../../../config/devtools.config'

const Others = () => {
    return (
        <div className={Styles.container}>
            <ul className={Styles.devtoolList}>
                {Object.keys(devtools).map((item)=>{
                    let devtool = devtools[item];
                    let Icon = devtool.icon
                    return(
                        <li className={Styles.devtoolItem} key={devtool.id}>
                            <div className={Styles.devtoolInfo}>
                                <Icon className={Styles.icon}/>
                                <span className={Styles.devToolDescription}>{devtool.text}</span>
                            </div>
                            <div className={Styles.devtoolProgress}>
                                {(() => {
                                    console.log()
                                    const activeDots =( 10 - ((devtool.progressRatio) * 10) )
                                    let statusArray = [
                                        ...Array(activeDots).fill(1),
                                        ...Array(10 - activeDots).fill(0)
                                    ]
                                    return statusArray.reverse().map((isActive, index)=>(
                                        <span key={devtool.id + index} className={`${Styles.progressDot} ${isActive ? Styles.progressDotActive : '' }`}  />
                                    ))
                                })()}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Others
