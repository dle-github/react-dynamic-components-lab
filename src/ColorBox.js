import React, { Component } from 'react';

export default class ColorBox extends Component {
	state = {
		todos: [],
	};

	render() {
		const increment = this.props.opacity - 0.1;
		return (
			<div
				className="color-box" 
				style={{
					opacity: this.props.opacity /*replace null with the value*/,
				}}
			>
				{
					this.props.opacity >= 0.2
					? <ColorBox opacity={increment} />
					: null
				}
			</div>
		);
	}
}
		// return (
		// 	<div
		// 		className="color-box"
		// 		style={{
		// 			opacity: opValue /*replace null with the value*/,
		// 		}}
		// 	>
		// 		{}
		// 	</div>
		// );
