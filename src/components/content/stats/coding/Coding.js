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
        color: '',
        filter: ['frontEnd', 'backEnd', 'dataBase'],
        progressRatio: .95
    },
    'css' :{
        id: 'css',
        text: 'CSS',
        icon: DiCss3,
        color: '',
        filter: ['frontEnd'],
        progressRatio: .75
    },
    'python' :{
        id: 'python',
        text: 'Python',
        icon: DiPython,
        color: '',
        filter: ['backEnd'],
        progressRatio: .1
    },
    'bash' :{
        id: 'bash',
        text: 'Bash',
        icon: DiTerminal,
        color: '',
        filter: ['infraStructure'],
        progressRatio: .25
    },
    'csharp' :{
        id: 'csharp',
        text: 'C Sharp',
        icon: SiVisualstudio,
        color: '',
        filter: ['backEnd'],
        progressRatio: .3
    },'vb' :{
        id: 'vb',
        text: 'Visual Basic',
        icon: SiVisualstudio,
        color: '',
        filter: ['backEnd'],
        progressRatio: .2
    },
    'html' :{
        id: 'html',
        text: 'HTML',
        icon: DiHtml5,
        color: '', 
        filter: ['frontEnd'],
        progressRatio: .9
    },
    'sql' :{
        id: 'sql',
        text: 'SQL',
        icon: DiDatabase,
        color: '',
        filter: ['dataBase'],
        progressRatio: .7
    },
    
}

const Coding = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(null)
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
            />}
        </div>
    )
}

export default Coding
