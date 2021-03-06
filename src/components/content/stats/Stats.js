import React, {useState} from 'react'
import Styles from './Stats.module.css'
import StatsNav from './StatsNav'
import Coding from './coding/Coding'
import Devtools from './devtools/Devtools'
// import More from './More'

const Stats = () => {
    const [selectedCategory, setSelectedCategory] = useState('coding');
    // const [selectedSubcategory, setSelectedSubcategory] = useState(null);

    return (
        <article className={Styles.container}>
            <h2 className={Styles.title}>Skillset</h2>
            <StatsNav selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <div className={Styles.statsContainer}>
                <Coding />
                <Devtools />
                {/* <More /> */}
            </div>
        </article>
    )
}

export default Stats
