import React, {useEffect, useRef} from 'react'
import Styles from './Explorer.module.css'

const Explorer = ({languageId, progressRatio, Icon}) => {
    const svgRef = useRef(null);
    useEffect(()=>{
        if(!!svgRef.current){
            let svgNode = svgRef.current;
            let circleNode = svgNode.childNodes[0];
            let strokeWidth = 10;
            //para evitar el overflow del circulo dentro del svg
            let circleRadius = (svgNode.clientWidth / 2) - (strokeWidth * 2);
            //radius = (svgWidth / 2) - (strokeWidth * 2)
            circleNode.style.strokeWidth = `${strokeWidth}px`;
            circleNode.r.baseVal.value = circleRadius;
            // el 80% de la circunferencia, tenemos que poner un gap enorme para sanear 
            // algunos detalles de animacion -> 10000
            circleNode.style.strokeDasharray = `${(2 * Math.PI * circleNode.r.baseVal.value * .815)} 10000`
            circleNode.style.strokeDashoffset = (2 * Math.PI * circleNode.r.baseVal.value * .815 );
        }
    },[svgRef, progressRatio])
    return (
        <div className={Styles.container}>
            <div className={Styles.graphsSection}>
                <div className={Styles.mainGraph}>
                    <svg className={Styles.circleContainer} ref={svgRef}>
                        {/* es necesario pasarle el key para el trigger de animaciones */}
                        <circle key={languageId} className={Styles.circle} cx="50%" cy="50%" />
                    </svg>
                    <Icon className={Styles.Icon}/>
                </div>
                {/* <div className={Styles.secondaryGraphs}>

                    <div className={Styles.amount}>projects</div>
                    <div className={Styles.amount}>certificates</div>
                </div> */}
            </div>
            <ul>
            </ul>
        </div>
    )
}

export default Explorer
