import React, { Component } from 'react';

import './style.css';
// import './functionality';

class Main extends Component {
	state = {};
	render() {
		return (
			<div>
				<main className=' d-flex flex-column bg-light flex-grow-1 py-3 main_image'>
					{this.props.children}
				</main>
			</div>
		);
	}
}

export default Main;
