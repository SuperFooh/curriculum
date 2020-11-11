import React, { useEffect, useRef, useState } from "react";
import { IconContext } from "react-icons";
import Styles from "./Explorer.module.css";
import { SiCodesandbox} from 'react-icons/si'
import {MdLibraryBooks} from 'react-icons/md'

//animacion del counter

const Explorer = ({ projects,languageId, progressRatio, Icon, color, certificates }) => {
	const [progressCount, setProgressCount] = useState(0);
	const [projectsCount, setProjectsCount] = useState(0);
	const [certificatesCount, setCertificatesCount] = useState(0);
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
		let frame = 0;
		const totalFrames = Math.round(animationDuration / frameDuration);
		const counter = setInterval(() => {
			frame++;
			const progress = easeOutQuad(frame / totalFrames);
			setProgressCount(Math.floor(progressRatio * 100 * progress));
			setProjectsCount(Math.floor(projects * progress));
			setCertificatesCount(Math.floor(certificates * progress));
			if (frame === totalFrames) {
				clearInterval(counter);
			}
			return () => {
				clearInterval(counter);
			};
		}, frameDuration);
	}, [progressRatio,projects,certificates]);
	//#endregion
	return (
		<div className={Styles.container}>
			<IconContext.Provider value={{ color: `${color}` }}>
					<div className={Styles.mainGraph}>
						<svg className={Styles.progressContainer} ref={svgRef}>
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
						{/* <div className={Styles.iconContainer}>

						</div> */}
						<Icon className={Styles.Icon} />
						<span className={Styles.progressValue}>{progressCount} &#37;</span>
					</div>
					<div className={Styles.secondaryGraphs}>
						<div key={`${languageId}cert`} className={Styles.medalContainer}>
							<div className={Styles.medal}>
								<div className={Styles.medalCircle}>
									<span className={Styles.certificateAmount}>{certificatesCount}</span>
								</div>
							</div>
								<div className={Styles.ribon} />
								<div className={Styles.ribon} />
						</div>
						<div key={`${languageId}proj`} className={Styles.projects}>
							<span className={Styles.projectsLegend}>Projects</span>
							<div className={Styles.projectsCircle}>
								<span className={Styles.projectsAmount}>
									{projectsCount}
								</span>
							</div>
						</div>
					</div>
					{/* <div className={Styles.info}>
						<div className={Styles.infoItem}>
							<SiCodesandbox className={Styles.infoIcon}/>
							<span className={Styles.infoTitle}>Frameworks</span>
						</div>
						<div className={Styles.infoItem}>
							<MdLibraryBooks className={Styles.infoIcon}/>
							<span className={Styles.infoTitle}>Libraries</span>
						</div>
					</div> */}
			</IconContext.Provider>
		</div>
	);
};

export default Explorer;
