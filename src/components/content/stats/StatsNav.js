import React, {useCallback, useState, useRef} from "react";
import Styles from './StatsNav.module.css'

import { RiCodeSSlashLine, RiToolsFill } from 'react-icons/ri'
import {BiPlusCircle} from 'react-icons/bi'

const meta = [
    {
        id : "coding",
        icon: RiCodeSSlashLine,
        text: "Coding"
    },{
        id : "devtools",
        icon: RiToolsFill,
        text: "Devtools"
    },{
        id : "more",
        icon: BiPlusCircle,
        text: "More"
    }
]

const StatsNav = ({selectedCategory, setSelectedCategory}) => {

    const navigationIndicatorRef = useRef()
    const [ref, setRef] = useState(null)
    
    const setCategoryRef = useCallback(element => {
        if (element?.getAttribute('name') === selectedCategory){
            setRef(element);
            
        }
    }, [selectedCategory])

    const navigate = e => {
        const node = e.currentTarget
        setSelectedCategory(node.getAttribute('name'))
    }


	return (
		<nav>
			<ul className={Styles.container}>
                {
                    meta.map(li => {
                        let Icon = li.icon;
                        return (
                            <li 
                                key={li.id} 
                                className={Styles.categoryContainer} 
                                onClick={navigate} 
                                ref={setCategoryRef} 
                                name={li.id} 
                            >
                                <a href={`#${li.id}`} className={`${Styles.category} ${selectedCategory === li.id ? Styles.activeNavlink : ''}`}>
                                    <Icon className={Styles.categoryIcon}/>
                                    <span className={Styles.categoryText}>{li.text}</span>
                                </a>
                            </li>
                        )
                    })
                }
                <span 
                    ref={navigationIndicatorRef} 
                    style={{
                        width:`${ref ? ref.clientWidth : 0}px`,
                        left: `${ref ? ref.offsetLeft: 0}px`
                    }}
                    className={Styles.NavigationIndicator}
                />
			</ul>
		</nav>
	);
};

export default StatsNav;
