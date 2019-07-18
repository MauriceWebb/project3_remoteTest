import React, { Component, Fragment } from 'react';
import Nav from '../subponents/Nav/index';
import Jumbotron from '../subponents/Jumbotron/index';
import SearchBar from '../subponents/SearchBar/index';
import './style.css';

class Header extends Component {
	state = {
		// page: this.props.page,
		latestQuery: ''
	};
	// functions...
	getLatestQuery = query => {
		this.setState({ latestQuery: query });
	};

	render() {
		return (
			<div>
				<header className='d-flex flex-column justify-content-around py-2 ui_gradient2'>
					<Nav page={this.props.page} />
					{/* if the current page is the home page, then render the following elements... */}
					{this.props.page === 'home' ? (
						<Fragment>
							<Jumbotron /> <SearchBar getLatestQuery={this.getLatestQuery} updateResults={this.props.updateResults} />
						</Fragment>
					) : null}
				</header>
			</div>
		);
	}
}

export default Header;
