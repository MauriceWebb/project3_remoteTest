import React, { Component } from 'react';
// subponents...
import Carousel from '../subponents/Carousel/index';
import MediaObject1 from '../subponents/MediaObject1/index';
import CardDeck2 from '../subponents/CardDeck2/index';
import MediaObject2 from '../subponents/MediaObject2/index';

import './style.css';
import './functionality';

class Main extends Component {
	state = {};
	render() {
		return (
			<div>
				<main className=' d-flex flex-column bg-light flex-grow-1 py-3 main_image'>
					<Carousel />

					<MediaObject1 />

					<CardDeck2 />

					<MediaObject2 />

					<MediaObject1 />
				</main>
			</div>
		);
	}
}

export default Main;
