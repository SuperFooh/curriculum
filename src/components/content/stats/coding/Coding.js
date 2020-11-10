import React, {useState} from 'react'
import Styles from './Coding.module.css'
import {DiDatabase, DiJavascript, DiCss3, DiPython, DiTerminal, DiHtml5} from 'react-icons/di'
import {SiVisualstudio} from 'react-icons/si'
import Explorer from './Explorer'

const meta = {
    'javascript' :{
        id: 'javascript',
        text: 'JavaScript',
        icon: DiJavascript,
        color: '#efd81e',
        filter: ['frontEnd', 'backEnd', 'dataBase'],
        progressRatio: .95,
        projects: 2,
        certificates: 3,
    },
    'css' :{
        id: 'css',
        text: 'CSS',
        icon: DiCss3,
        color: '#016bb4',
        filter: ['frontEnd'],
        progressRatio: .9,
        projects: 2,
        certificates: 3,
    },
    'python' :{
        id: 'python',
        text: 'Python',
        icon: DiPython,
        color: '#01d638',
        filter: ['backEnd'],
        progressRatio: .3,
        projects: 2,
        certificates: 3,
    },
    'bash' :{
        id: 'bash',
        text: 'Bash',
        icon: DiTerminal,
        color: '#eaeaeb',
        filter: ['infraStructure'],
        progressRatio: .25,
        projects: 2,
        certificates: 3,
    },
    'csharp' :{
        id: 'csharp',
        text: 'C Sharp',
        icon: SiVisualstudio,
        color: '#7d3583',
        filter: ['backEnd'],
        progressRatio: .5,
        projects: 2,
        certificates: 3,
    },'vb' :{
        id: 'vb',
        text: 'Visual Basic',
        icon: SiVisualstudio,
        color: '#185c91',
        filter: ['backEnd'],
        progressRatio: .4,
        projects: 2,
        certificates: 3,
    },
    'html' :{
        id: 'html',
        text: 'HTML',
        icon: DiHtml5,
        color: '#e34d26', 
        filter: ['frontEnd'],
        progressRatio: .9,
        projects: 2,
        certificates: 3,
    },
    'sql' :{
        id: 'sql',
        text: 'SQL',
        icon: DiDatabase,
        color: '#f84741',
        filter: ['dataBase'],
        progressRatio: .87,
        projects: 2,
        certificates: 3,
    },
    
}

const Coding = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(meta['javascript'])
    const activateLanguageItem = e => {
        let node = e.currentTarget;
        setSelectedLanguage(meta[node.id])
    }
    return (
        <div className={Styles.container} id="coding">
            <div className={Styles.languageSection}>
                <h3 className={Styles.languageSectionTitle}>Language</h3>
                <ul className={Styles.languageList}>
                    {
                        Object.keys(meta).map(key => {
                            let language = meta[key];
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
            />}
        </div>
    )
}

export default Coding
