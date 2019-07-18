import React from 'react';
import $ from 'jquery';
import API from '../../../utils/API';

// Functions...
const handleSearch = _ => {
	const query = $('#searchBarInput')
		.val()
		.trim();
	// test log...
	console.log('Searching for: ', query);
	// perform search...
	API.getHerbsByQuery(query)
		.then(res => console.log(res.data))
		.catch(err => console.log(err));
	// reset form(s)...
	$('#searchBarInput').val('');
};

const SearchBar = props => {
	return (
		<div>
			<div className='container'>
				<div
					className='input-group mb-2 shadow-sm rounded-btn overflow-hidden border-0'
					style={{ outline: 'none' }}
				>
					<input
						type='text'
						className='form-control border-0 px-4'
						id='searchBarInput'
						aria-label='Text input with segmented search button'
						style={{
							outline: 'none',
							color: '#408468',
							lineHeight: 10,
							fontFamily:
								'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'
						}}
						placeholder='Search an herb, symptom, and/or remedy...'
					/>
					<div className='input-group-append'>
						<button
							className='btn ui_btn2 border-0 text-white'
							onClick={_ => handleSearch()}
						>
							<i className='fas fa-search px-4' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
