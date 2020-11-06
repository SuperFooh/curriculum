import React, {useState} from 'react'
import Styles from './Nav.module.css'
import NavigationMenu from './NavigationMenu'


const Nav = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleMenu = () => {
        setIsExpanded(prevState => !prevState )
    }
    return (<nav className={Styles.container}>
        <div onClick={toggleMenu} className={`${Styles.hamburguerMenu} ${isExpanded ? Styles.hamburgerMenuExpanded : ''}`}>
            <span className={Styles.stick}/>
            <span className={Styles.stick}/>
            <span className={Styles.stick}/>
        </div>
        <NavigationMenu isExpanded={isExpanded}/>
    </nav>)
}

export default Nav
