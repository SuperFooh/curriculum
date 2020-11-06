import React, {useState} from 'react'
import Styles from './Coding.module.css'
import {DiJavascript, DiCss3, DiPython, DiTerminal, DiHtml5} from 'react-icons/di'
import {SiVisualstudio} from 'react-icons/si'
import {AiOutlineConsoleSql} from 'react-icons/ai'


const meta = {
    'javascript' :{
        id: 'javascript',
        text: 'JavaScript',
        icon: DiJavascript,
        color: '',
        filter: ['frontEnd', 'backEnd', 'dataBase']
    },
    'css' :{
        id: 'css',
        text: 'CSS',
        icon: DiCss3,
        color: '',
        filter: ['frontEnd']
    },
    'python' :{
        id: 'python',
        text: 'Python',
        icon: DiPython,
        color: '',
        filter: ['backEnd']
    },
    'bash' :{
        id: 'bash',
        text: 'Bash',
        icon: DiTerminal,
        color: '',
        filter: ['infraStructure']
    },
    'csharp' :{
        id: 'csharp',
        text: 'C Sharp',
        icon: SiVisualstudio,
        color: '',
        filter: ['backEnd'],
    },'vb' :{
        id: 'vb',
        text: 'Visual Basic',
        icon: SiVisualstudio,
        color: '',
        filter: ['backEnd'],
    },
    'html' :{
        id: 'html',
        text: 'HTML',
        icon: DiHtml5,
        color: '', 
        filter: ['frontEnd'],
    },
    'sql' :{
        id: 'sql',
        text: 'SQL',
        icon: AiOutlineConsoleSql,
        color: '',
        filter: ['dataBase']
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
                                    className={`${Styles.languageItem} ${selectedLanguage === language.id ? Styles.activeLanguage : ''}`} 
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
            <div className={Styles.explorer}>
                {selectedLanguage && (()=> {
                    let Icon = selectedLanguage.icon
                    return (<>
                        <h4 className={Styles.exploredTitle}>{selectedLanguage.text}</h4>
                        <Icon className={Styles.exploredIcon}/>
                    </>)
                })()}
            </div>
        </div>
    )
}

export default Coding
