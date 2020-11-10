import React, { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import Styles from "./Explorer.module.css";

//animacion del counter

const Explorer = ({ languageId, progressRatio, Icon, color, certificates }) => {
	const [count, setCount] = useState(0);
	const svgRef = useRef(null);
	//#region responsive dimensions
	useEffect(() => {
		if (!!svgRef.current) {
			let svgNode = svgRef.current;
			let circleNode = svgNode.childNodes[0].childNodes[0];
			let progressNode = svgNode.childNodes[0].childNodes[1];
			let strokeWidth = 10;

			//para evitar el overflow del circulo dentro del svg
			let radius = svgNode.clientWidth / 2 - strokeWidth * 2;

			//radius = (svgWidth / 2) - (strokeWidth * 2)
			progressNode.style.strokeWidth = `${strokeWidth}px`;
			circleNode.style.strokeWidth = `${strokeWidth}px`;

			progressNode.r.baseVal.value = radius;
			circleNode.r.baseVal.value = radius;
			circleNode.style.strokeDasharray = `${
				2 * Math.PI * progressNode.r.baseVal.value * 0.812
			} 10000`;

			// el 80% de la circunferencia, tenemos que poner un gap enorme para sanear
			// algunos detalles de animacion -> 10000
			progressNode.style.strokeDasharray = `${
				2 * Math.PI * progressNode.r.baseVal.value * 0.812 * progressRatio
			} 10000`;
			progressNode.style.strokeDashoffset =
				2 * Math.PI * progressNode.r.baseVal.value * 0.812;
		}
	}, [svgRef, languageId, progressRatio]);
	//#endregion
	//#region counter animation effect
	useEffect(() => {
		const easeOutQuad = (t) => t * (2 - t);
		const frameDuration = 1000 / 60; //calculo de cuanto dura cada frame si queremos actualizarlo 60 veces
		const animationDuration = 1000; //en ms
		let countTo = progressRatio * 100;
		let frame = 0;
		const totalFrames = Math.round(animationDuration / frameDuration);
		const counter = setInterval(() => {
			frame++;
			const progress = easeOutQuad(frame / totalFrames);
			setCount(Math.floor(countTo * progress));

			if (frame === totalFrames) {
				clearInterval(counter);
			}
			return () => {
				clearInterval(counter);
			};
		}, frameDuration);
	}, [progressRatio]);
	//#endregion
	return (
		<div className={Styles.container}>
			<IconContext.Provider value={{ color: `${color}` }}>
				<div className={Styles.graphsSection}>
					<div className={Styles.mainGraph}>
						<svg className={Styles.progressContainer} ref={svgRef}>
							{/* es necesario pasarle el key para el trigger de animaciones */}
							<g>
								<circle className={Styles.circle} cx='50%' cy='50%' />
								<circle
									style={{ stroke: color }}
									key={languageId}
									className={Styles.progressIndicator}
									cx='50%'
									cy='50%'
								/>
							</g>
						</svg>
						<Icon className={Styles.Icon} />
						<span className={Styles.progressValue}>{count} &#37;</span>
					</div>
					<div className={Styles.secondaryGraphs}>
						{/* <div className={Styles.medalContainer}> */}
							<div className={Styles.medalContainer}>
								<div className={Styles.medal}>
									{/* <div className={Styles.medalCircle}>
										<span className={Styles.certificateAmount}>{certificates}</span>
									</div> */}
								</div>
								<div className={Styles.ribon}></div>
							</div>
						{/* </div> */}

						{/* <div className={Styles.projects}></div> */}
					</div>
				</div>
				{/* <ul>
                </ul> */}
			</IconContext.Provider>
		</div>
	);
};

export default Explorer;
