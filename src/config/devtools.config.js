import {SiVim, SiGithub, SiReact, SiPostman, SiGooglechrome, SiRedux, SiNodemon} from 'react-icons/si'
import {RiTerminalLine, RiNpmjsFill} from 'react-icons/ri'

export default {
    postman :{
        id: 'postman',
        text: 'Postman',
        icon: SiPostman, 
        progressRatio: .6,
    },
    chrome : {
        id: 'chrome',
        text: 'Chrome-Devtools',
        icon: SiGooglechrome,
        progressRatio: .8
    },
    redux : {
        id:'redux',
        text: 'Redux-Devtools',
        icon: SiRedux,
        progressRatio: 1
    },
    nodemon: {
        id: 'nodemon',
        text: 'Nodemon',
        icon: SiNodemon,
        progressRatio: 1
    },
    curl: {
        id: 'curl',
        text: 'Curl',
        icon: RiTerminalLine,
        progressRatio: .2
    },
    react : {
        id: 'react',
        text: 'React-Devtools',
        icon: SiReact,
        progressRatio: 1
    },
    github: {
        id:'github',
        text: 'GitHub',
        icon: SiGithub,
        progressRatio: .7
    },
    npm: {
        id: 'npm',
        text: 'NPM',
        icon: RiNpmjsFill,
        progressRatio: .7,
    },
    vim: {
        id: 'vim',
        text: 'vim',
        icon: SiVim,
        progressRatio: .3
    }

}