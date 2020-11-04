import React, {useState} from 'react'
import Styles from './Stats.module.css'
import StatsNav from './StatsNav'
import Fallback from './Fallback'
import Coding from './Coding'


const Stats = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState();

    return (
        <article className={Styles.container}>
            <h2 className={Styles.title}>Skillset</h2>
            <StatsNav selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <div className={Styles.statsContainer}>
                <Fallback />
                <Coding />
            </div>
        </article>
    )
}

export default Stats
