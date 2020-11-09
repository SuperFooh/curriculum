import React, {useState} from 'react'
import Styles from './NavigationMenu.module.css'
import { IoMdSchool} from 'react-icons/io'
import {FaLayerGroup, FaSuitcase} from 'react-icons/fa'


const meta = [
    {
        id: 'portfolio',
        icon: FaSuitcase,
        text: 'Portfolio',
    },
    {
        id: 'studies',
        icon: IoMdSchool,
        text: 'Studies',
    },
    {
        id:'skillset',
        icon: FaLayerGroup,
        text: 'Skillset'
    },
]

const NavigationMenu = ({isExpanded}) => {
    const [selectedCategory, setSelectedCategory] = useState(null)
    const activateLink = e => {
        let node = e.currentTarget;
        setSelectedCategory(node.getAttribute('name'))
    }
    return(<ul className={`${Styles.container} ${isExpanded ? Styles.containerExpanded : ''}`}>
        {meta.map((navlink) => {
            let Icon = navlink.icon;
            return(
                <li key={navlink.id} className={Styles.navlinkContainer}>
                    <a onClick={activateLink} href={`#${navlink.id}`} name={navlink.id} className={`${Styles.navlink} ${selectedCategory === navlink.id ? Styles.activeNavlink : ''}`}>
                        <Icon  className={Styles.navlinkIcon}/>
                    </a>
                </li>
            )
        })}
    </ul>)
}

export default NavigationMenu
