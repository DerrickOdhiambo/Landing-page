import React from 'react';
import '../styles/achievement.scss';

// Bootstrap
import Card from 'react-bootstrap/Card';
import { BsArrowRight } from 'react-icons/bs';
import { BsTrophy } from 'react-icons/bs';
import { BsStar } from 'react-icons/bs';

const Achievement = () => {
	return (
		<React.Fragment>
			<section className='achievement-section'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4 card-1'>
							<Card>
								<Card.Body>
									<h3>
										<span>
											<BsStar />
										</span>{' '}
										Rating
									</h3>
									<div className='card-middle'>
										<img src='/images/people.png' alt='' />
										<h5>
											<span>+835k</span> Members
										</h5>
									</div>
									<p>
										More than 2 billion we people over <br /> countries use
										socibooks we to stay <br /> in touch with friends
									</p>
									<button className='btn'>
										Join Our Community <BsArrowRight />
									</button>
								</Card.Body>
							</Card>
						</div>
						<div className='col-md-4 card-2'>
							<Card>
								<Card.Body>
									<h3>
										<span>
											<BsTrophy />
										</span>{' '}
										Awwwards
									</h3>
									<div className='card-middle'>
										<img src='/images/awards.png' alt='' />
										<h5>
											Best of <span>2021</span> on Github
										</h5>
									</div>
									<p>
										More than 2 billion we people over <br /> countries use
										socibooks we to stay <br /> in touch with friends
									</p>
									<button className='btn'>
										Go To Awards <BsArrowRight />
									</button>
								</Card.Body>
							</Card>
						</div>
						<div className='col-md-4 card-3'>
							<h3>our achievement</h3>
							<h1>
								We are Connecting
								<br />
								You The Digital Life.
							</h1>
							<p>
								The scope the social media becomes crucial is <br />
								helps the business to directly engage with their
								<br />
								needs and wants
							</p>
							<button className='btn'>
								Discover me <BsArrowRight />{' '}
							</button>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Achievement;
