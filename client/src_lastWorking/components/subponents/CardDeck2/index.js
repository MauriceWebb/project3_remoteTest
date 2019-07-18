import React from 'react';
import './style.css';

const CardDeck2 = props => {
	return (
		<div>
			<div className='container shadow-sm- rounded p-3'>
				<div className='row'>
					<div className='container card-deck'>
						<div className='card border-0 overflow-hidden bg-transparent'>
							<div className='card-body text-center'>
								<i
									className='fab fa-pagelines text-pinkish rounded m-3'
									style={{ fontSize: '5em' }}
								/>
								<h5 className='card-title font-weight-bold'>
									Herbal resources. Botanical solutions.
								</h5>
								<p className='card-text'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
									quasi, obcaecati veritatis tenetur magnam pariatur quidem
									laudantium?
								</p>
							</div>
						</div>
						<div className='card border-0 overflow-hidden bg-transparent'>
							<div className='card-body text-center'>
								<i
									className='fas fa-search text-pinkish rounded m-3'
									style={{ fontSize: '5em' }}
								/>
								<h5 className='card-title font-weight-bold'>
									Search for herbs, symptoms, or remedies.
								</h5>
								<p className='card-text'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Inventore maiores nisi perspiciatis eos delectus porro
									voluptas nam numquam illum earum.
								</p>
							</div>
						</div>
						<div className='card border-0 overflow-hidden bg-transparent'>
							<div className='card-body text-center'>
								<i
									className='fas fa-heartbeat text-pinkish rounded m-3'
									style={{ fontSize: '5em' }}
								/>
								<h5 className='card-title font-weight-bold'>
									Holistic and alternative health.
								</h5>
								<p className='card-text'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
									rerum, perspiciatis vero error inventore quam.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardDeck2;
