import React from 'react';

class SearchResults extends Component {
	state = {
		results: []
	};
	render() {
		return (
			<div>
				<div className='container shadow rounded p-4 border'>
					<h3 className='text-center text-md-left text-light-'>
						Search results:
					</h3>
					<hr className='w-25 bg-success rounded py-1 ui_gradient2 border-0 mt-n1 ml-md-0' />
					<div className='row'>
						<div className='container card-columns'>
							{/* Cards will be rendered here... */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchResults;
