import React, {useState} from 'react'
import Styles from './Stats.module.css'
import StatsNav from './StatsNav'
import Fallback from './Fallback'
import Coding from './Coding'
import Frameworks from './Frameworks'
import Devtools from './Devtools'
import More from './More'

const Stats = () => {
    const [selectedCategory, setSelectedCategory] = useState('coding');
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);

    return (
        <article className={Styles.container}>
            <h2 className={Styles.title}>Skillset</h2>
            <StatsNav selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <div className={Styles.statsContainer}>
                <Coding />
                <Frameworks />
                <Devtools />
                <More />
            </div>
        </article>
    )
}

export default Stats
