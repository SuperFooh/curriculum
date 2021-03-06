import React from "react";
import Styles from './Fallback.module.css'
const Fallback = () => {
	return (
		<div className={Styles.container}>
			<h3 className={Styles.text}>Pick a category</h3>
			<svg
				className={Styles.image}
				height='512'
				viewBox='0 0 64 64'
				width='512'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g id='outline'>
					<path d='m26 24h2v2h-2z' />
					<path d='m36 24h2v2h-2z' />
					<path d='m31 28h2v4h-2z' />
					<path d='m28 34h8v2h-8z' />
					<path d='m42 13a1 1 0 0 0 -.783-.977l-9-2a1.042 1.042 0 0 0 -.589.048l-4.583 1.829-3.6-1.8a1 1 0 0 0 -1.445.9v13.1a5 5 0 0 0 0 9.8v7.1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7.1a5 5 0 0 0 0-9.8zm-20 18.829a3 3 0 0 1 0-5.658zm18 8.171h-16v-18h16zm0-20h-16v-7.382l2.553 1.282a1 1 0 0 0 .819.034l4.712-1.886 7.916 1.752zm4 9a3.006 3.006 0 0 1 -2 2.829v-5.658a3.006 3.006 0 0 1 2 2.829z' />
					<path d='m13 52a3 3 0 0 0 3-3v-18a3 3 0 0 0 -3-3h-8a3 3 0 0 0 -3 3v18a3 3 0 0 0 3 3zm-9-21a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v15h-10zm0 18v-1h10v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1-1z' />
					<path d='m61 28h-12a1 1 0 0 0 -1 1v22a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-22a1 1 0 0 0 -1-1zm-1 22h-10v-2h10zm0-4h-10v-16h10z' />
					<path d='m59 2h-12a3 3 0 0 0 -3 3v13a3 3 0 0 0 1.565 2.634l-1.46 2.919a1 1 0 0 0 1.3 1.361l8.807-3.914h4.788a3 3 0 0 0 3-3v-13a3 3 0 0 0 -3-3zm1 16a1 1 0 0 1 -1 1h-5a1 1 0 0 0 -.406.086l-6.453 2.868.754-1.507a1 1 0 0 0 -.895-1.447 1 1 0 0 1 -1-1v-13a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1z' />
					<path d='m53 44h5v-2h-4v-1.382l3.447-1.718a1 1 0 0 0 .553-.9v-3a1 1 0 0 0 -1-1h-4a1 1 0 0 0 -1 1v2h2v-1h2v1.382l-3.447 1.718a1 1 0 0 0 -.553.9v3a1 1 0 0 0 1 1z' />
					<path d='m10 34h-3v2h2v8h2v-9a1 1 0 0 0 -1-1z' />
					<path d='m55 6h-4a1 1 0 0 0 -1 1v2h2v-1h2v1.382l-1.447.723a1 1 0 0 0 -.553.895v2h2v-1.382l1.447-.723a1 1 0 0 0 .553-.895v-3a1 1 0 0 0 -1-1z' />
					<path d='m52 15h2v2h-2z' />
					<path d='m57 54h-10a1 1 0 0 0 -1 1v1h-2v-2h1a1 1 0 0 0 1-1v-6a3 3 0 0 0 -3-3h-22a3 3 0 0 0 -3 3v6a1 1 0 0 0 1 1h1v2h-2v-1a1 1 0 0 0 -1-1h-10a3 3 0 0 0 0 6h3v1a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1v-1h3a3 3 0 0 0 0-6zm-47 4h-3a1 1 0 0 1 0-2h3zm6 2h-4v-4h4zm8 0h-6v-2h3a1 1 0 0 0 1-1v-3h2zm0-8h-4v-5a1 1 0 0 1 1-1h3zm10.865-6-2.865 3.438-2.865-3.438zm3.135 14h-12v-14h.531l4.7 5.641a1 1 0 0 0 1.536 0l4.702-5.641h.531zm2-14h3a1 1 0 0 1 1 1v5h-4zm6 14h-6v-6h2v3a1 1 0 0 0 1 1h3zm6 0h-4v-4h4zm5-2h-3v-2h3a1 1 0 0 1 0 2z' />
				</g>
			</svg>
		</div>
	);
};

export default Fallback;
