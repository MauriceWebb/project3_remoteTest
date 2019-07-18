import React, { Component } from 'react';

class HerbResult extends Component {
	state = {
        result = {}
    };
	render() {
		return (
			<div>
				<div className='container p-5 border d-flex flex-column shadow-sm'>
					<p className='text-center text-md-left'>
						<span
							className='font-weight-bold lead text-pinkish'
							id='nameResult'
						>
							Name
						</span>
						,{' '}
						<span className='font-italic' id='familyResult'>
							family
						</span>
					</p>
					<p className='text-center text-md-left text-muted text-lowercase'>
						( <span id='otherNamesResult'>other names</span> )
					</p>
					<p
						className='text-center text-md-left lead text-pinkish'
						id='ratingResult'
					>
						<i className='far fa-star' />
						<i className='far fa-star' />
						<i className='far fa-star' />
						<i className='far fa-star' />
						<i className='far fa-star' />
					</p>
					<div className='container'>
						<div className='row'>
							<div className='col-md-4'>
								<div className='row'>
									<div
										className='col-12 round_corner shadow-sm'
										id='imageResult'
										style={{
											minHeight: 200,
											backgroundImage:
												"url('https://source.unsplash.com/random/300x200?herbs')",
											backgroundSize: 'cover',
											backgroundPosition: 'center'
										}}
									/>
									<div className='col-12'>
										<p
											className='text-center font-italic text-muted font-weight-light'
											id='botanicalNamesResult'
										>
											botanical names
										</p>
									</div>
								</div>
							</div>
							<div className='col-md-8 px-0 px-md-3'>
								<p>
									<span
										className='font-weight-bold text-pinkish'
										id='generalDescriptionResult'
									>
										General Description:{' '}
									</span>
									<span>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Harum, dolorum? Maiores illum optio sit animi eum atque
										consequuntur velit cum accusamus, rerum accusantium
										quibusdam doloremque veritatis praesentium assumenda
										voluptas blanditiis qui ratione perspiciatis asperiores
										inventore, eos iste.
									</span>
								</p>
							</div>
						</div>
					</div>
					<p>
						<span className='font-weight-bold' id='medicallyValidUsesResult'>
							Medically Valid Uses:{' '}
						</span>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
							excepturi ut tempore mollitia quod atque rerum iusto vero eligendi
							neque doloremque earum magnam fugiat modi laboriosam vel, nisi,
							dolorum doloribus magni, facere quam pariatur. Voluptatum ipsa
							eveniet dicta culpa? Itaque harum impedit molestiae consequuntur
							eaque fuga consectetur amet sunt, delectus distinctio reiciendis.
						</span>
					</p>
					<p>
						<span className='font-weight-bold' id='unsubstantiatedClaimsResult'>
							Unsubstantiated Claims:{' '}
						</span>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
							excepturi ut tempore mollitia quod atque rerum iusto vero eligendi
							neque doloremque earum magnam fugiat modi laboriosam vel, nisi,
							dolorum doloribus magni, facere quam pariatur. Voluptatum ipsa
							eveniet dicta culpa? Itaque harum impedit molestiae consequuntur
							eaque fuga consectetur amet sunt, delectus distinctio reiciendis.
						</span>
					</p>
					<p>
						<span className='font-weight-bold' id='sideEffectsResult'>
							Side Effects:{' '}
						</span>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
							excepturi ut tempore mollitia quod atque rerum iusto vero eligendi
							neque doloremque earum magnam fugiat modi laboriosam vel, nisi,
							dolorum doloribus magni, facere quam pariatur. Voluptatum ipsa
							eveniet dicta culpa? Itaque harum impedit molestiae consequuntur
							eaque fuga consectetur amet sunt, delectus distinctio reiciendis.
						</span>
					</p>
					<p>
						<span className='font-weight-bold' id='demonstratedUsesResult'>
							Demonstrated Uses:{' '}
						</span>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
							excepturi ut tempore mollitia quod atque rerum iusto vero eligendi
							neque doloremque earum magnam fugiat modi laboriosam vel, nisi,
							dolorum doloribus magni, facere quam pariatur. Voluptatum ipsa
							eveniet dicta culpa? Itaque harum impedit molestiae consequuntur
							eaque fuga consectetur amet sunt, delectus distinctio reiciendis.
						</span>
					</p>
					<p>
						<span className='font-weight-bold' id='recommendedIntakeResult'>
							Recommended Intake:{' '}
						</span>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
							excepturi ut tempore mollitia quod atque rerum iusto vero eligendi
							neque doloremque earum magnam fugiat modi laboriosam vel, nisi,
							dolorum doloribus magni, facere quam pariatur. Voluptatum ipsa
							eveniet dicta culpa? Itaque harum impedit molestiae consequuntur
							eaque fuga consectetur amet sunt, delectus distinctio reiciendis.
						</span>
					</p>
					<p>
						<span className='font-weight-bold' id='dosingFormatResult'>
							Dosing Format:{' '}
						</span>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
							excepturi ut tempore mollitia quod atque rerum iusto vero eligendi
							neque doloremque earum magnam fugiat modi laboriosam vel, nisi,
							dolorum doloribus magni, facere quam pariatur. Voluptatum ipsa
							eveniet dicta culpa? Itaque harum impedit molestiae consequuntur
							eaque fuga consectetur amet sunt, delectus distinctio reiciendis.
						</span>
					</p>
					<p>
						<span className='font-weight-bold' id='interactionsResult'>
							Interactions:{' '}
						</span>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
							excepturi ut tempore mollitia quod atque rerum iusto vero eligendi
							neque doloremque earum magnam fugiat modi laboriosam vel, nisi,
							dolorum doloribus magni, facere quam pariatur. Voluptatum ipsa
							eveniet dicta culpa? Itaque harum impedit molestiae consequuntur
							eaque fuga consectetur amet sunt, delectus distinctio reiciendis.
						</span>
					</p>
					<p>
						<span className='font-weight-bold' id='suggestedDosageResult'>
							Suggested Dosage:{' '}
						</span>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit in
							excepturi ut tempore mollitia quod atque rerum iusto vero eligendi
							neque doloremque earum magnam fugiat modi laboriosam vel, nisi,
							dolorum doloribus magni, facere quam pariatur. Voluptatum ipsa
							eveniet dicta culpa? Itaque harum impedit molestiae consequuntur
							eaque fuga consectetur amet sunt, delectus distinctio reiciendis.
						</span>
					</p>
				</div>
			</div>
		);
	}
}

export default HerbResult;
