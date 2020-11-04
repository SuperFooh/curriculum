import React, {useCallback, useState, useEffect, useRef} from "react";
import Styles from './StatsNav.module.css'
import { SiCodesandbox} from 'react-icons/si'
import { RiCodeSSlashLine, RiToolsFill } from 'react-icons/ri'
import {BiPlusCircle} from 'react-icons/bi'

const StatsNav = ({selectedCategory, setSelectedCategory}) => {

    const navigationIndicatorRef = useRef()
    const [ref, setRef] = useState(null)
    
    useEffect(() => {
        console.log(ref?.offsetLeft)
    }, [ref])
    
    const setCategoryRef = useCallback(element => {
        // console.log(element?.getAttribute('name'))
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
				<li className={Styles.categoryContainer} onClick={navigate} ref={setCategoryRef} name="coding" >
                    <a href="#coding" className={Styles.category}>
                        <RiCodeSSlashLine className={Styles.categoryIcon}/>
                        <span className={Styles.categoryText}>Coding</span>
                    </a>
                </li>
				<li className={Styles.categoryContainer} onClick={navigate} ref={setCategoryRef} name="frameworks">
                    <a href="#frameworks" className={Styles.category}>
                        <SiCodesandbox className={Styles.categoryIcon}/>
                        <span className={Styles.categoryText}>Libraries &#38; Frameworks</span>
                    </a>
                </li>
				<li className={Styles.categoryContainer} onClick={navigate} ref={setCategoryRef} name="devtools">
                    <a href="#devtools" className={Styles.category}>
                        <RiToolsFill className={Styles.categoryIcon}/>
                        <span className={Styles.categoryText}>Devtools</span>
                    </a>
                </li>
				<li className={Styles.categoryContainer} onClick={navigate} ref={setCategoryRef} name="more">
                    <a href="#more" className={Styles.category}>
                        <BiPlusCircle className={Styles.categoryIcon}/>
                        <span className={Styles.categoryText}>More</span>
                    </a>
                </li>
                <span 
                    ref={navigationIndicatorRef} 
                    style={{
                        width:`${ref ? ref.clientWidth : 0}px`,
                        left: `${ref ? ref.offsetLeft : 0}px`
                    }}
                    className={Styles.NavigationIndicator}
                />
			</ul>
		</nav>
	);
};

export default StatsNav;
