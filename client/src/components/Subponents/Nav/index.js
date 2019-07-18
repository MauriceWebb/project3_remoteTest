import React, { Component, Fragment } from 'react';
import LogInModal from '../LogInModal/index';
import SubscribeModal from '../SubscribeModal/index';
import { Link } from "react-router-dom";

class Nav extends Component {
	state = {
		userData: null
	};
	// functions...
	logIn = credentials => {};
	subscribe = userInput => {};

	render() {
		return (
			<div>
				<div className='container px-0'>
					<nav className='navbar navbar-expand-lg navbar-light d-flex align-items-stretch'>
						<Link to='/'
							className='navbar-brand align-self-center rounded-btn shadow-sm px-3 active bg-transparent'
							// href="#"
							style={{ color: '#43c6ac' }}
						>
							hrbs<span className='sr-only'>(current)</span>
						</Link>
						<button
							className='navbar-toggler border-0 shadow rounded-btn px-3'
							type='button'
							data-toggle='collapse'
							data-target='#navbarSupportedContent'
							aria-controls='navbarSupportedContent'
							aria-expanded='false'
							aria-label='Toggle navigation'
							style={{ outline: 'none' }}
						>
							<span className='navbar-toggler-icon' />
						</button>

						<div
							className='collapse navbar-collapse'
							id='navbarSupportedContent'
						>
							<ul className='navbar-nav text-center ml-lg-auto d-flex justify-content-between align-items-center'>
								<li className='nav-item mx-1'>
									<button
										className='nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4 bg-transparent'
										// href="#"
									>
										herbs
									</button>
								</li>
								<li className='nav-item mx-1'>
									<button
										className='nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4 bg-transparent'
										// href="#"
									>
										forum
									</button>
								</li>
								<li className='nav-item mx-1'>
									<button
										className='nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4 bg-transparent'
										// href="#"
									>
										about us
									</button>
								</li>
								<li className='nav-item mx-1'>
									<button
										className='nav-link rounded-btn mb-3 my-lg-2 px-4 px-md-4 bg-transparent'
										// href="#"
									>
										blog
									</button>
								</li>
								{!this.state.userData ? (
									<Fragment>
										<li className='nav-item  mx-1'>
											<button
												className='nav-link btn btn-light rounded-btn mb-3 my-lg-2 px-4 px-md-4 shadow bg-white'
												// href="#"
												data-toggle='modal'
												data-target='#logInModal'
											>
												log in
											</button>
										</li>
										<li className='nav-item mx-0 ml-lg-3'>
											<button
												className='nav-link btn ui_btn2 border-0 my-lg-2 text-white rounded-btn px-4 shadow'
												// href="#"
												data-toggle='modal'
												data-target='#subscribeModal'
											>
												subscribe
											</button>
										</li>
										<LogInModal logIn={this.logIn}/>
										<SubscribeModal subscibe={this.subscribe} />
									</Fragment>
								) : null}
							</ul>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}

export default Nav;
