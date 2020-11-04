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
        if (element?.id === selectedCategory){
            setRef(element);
            element.focus();
        }
    }, [selectedCategory])

    const navigate = e => {
        const node = e.currentTarget
        setSelectedCategory(node.id)
    }

	return (
		<nav>
			<ul className={Styles.container}>
				<li  onClick={navigate} ref={setCategoryRef} id="coding" className={Styles.category}>
                    <a>
                        
                    </a>
                    <RiCodeSSlashLine className={Styles.categoryIcon}/>
                    <span className={Styles.categoryText}>Coding</span>
                </li>
				<li onClick={navigate} ref={setCategoryRef} id="frameworks" className={Styles.category}>
                    <SiCodesandbox className={Styles.categoryIcon}/>
                    <span className={Styles.categoryText}>Libraries &#38; Frameworks</span>
                </li>
				<li onClick={navigate} ref={setCategoryRef} id="devtools" className={Styles.category}>
                    <RiToolsFill className={Styles.categoryIcon}/>
                    <span className={Styles.categoryText}>Devtools</span>
                </li>
				<li onClick={navigate} ref={setCategoryRef} id="more" className={Styles.category}>
                    <BiPlusCircle className={Styles.categoryIcon}/>
                    <span className={Styles.categoryText}>More</span>
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
