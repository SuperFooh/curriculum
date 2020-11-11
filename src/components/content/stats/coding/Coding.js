import React, {useState} from 'react'
import Styles from './Coding.module.css'
import languages from '../../../../config/languages.config'
import Explorer from './Explorer'

const Coding = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(null)
    const activateLanguageItem = e => {
        let node = e.currentTarget;
        setSelectedLanguage(languages[node.id])
    }
    return (
        <div className={Styles.container} id="coding">
            <div className={Styles.languageSection}>
                <h3 className={Styles.languageSectionTitle}>Language</h3>
                <ul className={Styles.languageList}>
                    {
                        Object.keys(languages).map(key => {
                            let language = languages[key];
                            return(
                                <li 
                                    onClick={activateLanguageItem}
                                    className={`${Styles.languageItem} ${selectedLanguage?.id === language.id ? Styles.activeLanguage : ''}`} 
                                    key={language.id}
                                    id={language.id}
                                >
                                    {language.text}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            {!!selectedLanguage && <Explorer
                Icon={selectedLanguage.icon} 
                progressRatio={selectedLanguage.progressRatio}
                languageId={selectedLanguage.id}
                color={selectedLanguage.color}
                certificates={selectedLanguage.certificates}
                projects={selectedLanguage.projects}
            />}
        </div>
    )
}

export default Coding
