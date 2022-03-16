import React from 'react';
import '../styles/features.scss';

// Bootstrap
import Card from 'react-bootstrap/Card';

const Features = () => {
	return (
		<React.Fragment>
			<section className='features-section'>
				<div className='features-section-header'>
					<h6 className='text-capitalize'>our community</h6>
					<h2>community main feature</h2>
					<p>
						The wise man therefore always holds in these matters <br /> to this
						priciple of selection
					</p>
				</div>
				<div className='feature-list-section container'>
					<div className='row'>
						<div className='col-md-6'>
							<Card className='card-1'>
								<Card.Body>
									<img src='images/Icon.png' alt='' />
									<div className='description'>
										<h3>Members, Friends</h3>
										<p>
											Members, Friends Connection (like <br /> followers ),
											Private Message
										</p>
									</div>
								</Card.Body>
							</Card>
						</div>
						<div className='col-md-6'>
							<Card>
								<Card.Body>
									<img src='images/Icon1.png' alt='' />
									<div className='description'>
										<h3>Groups</h3>
										<p>
											Your users can create groups to let other <br />
											users to join and talk
										</p>
									</div>
								</Card.Body>
							</Card>
						</div>
						<div className='col-md-6'>
							<Card>
								<Card.Body>
									<img src='images/Icon2.png' alt='' />
									<div className='description'>
										<h3>Forum</h3>
										<p>
											Forum is ready by BBPress. Your users
											<br /> can make topics and talk
										</p>
									</div>
								</Card.Body>
							</Card>
						</div>
						<div className='col-md-6'>
							<Card>
								<Card.Body>
									<img src='images/Icon3.png' alt='' />
									<div className='description'>
										<h3>Custom Module</h3>
										<p>
											You can create Members, Groups <br /> Module. We aleady
											created 3 modules. <br />
											It's by drag & drop live builder.
										</p>
									</div>
								</Card.Body>
							</Card>
						</div>
						<div className='col-md-6'>
							<Card>
								<Card.Body>
									<img src='images/Icon5.png' alt='' />
									<div className='description'>
										<h3>List Builder</h3>
										<p>
											Members, Groups list can be modified by <br /> drag & drop
											live builder.
										</p>
									</div>
								</Card.Body>
							</Card>
						</div>
						<div className='col-md-6'>
							<Card>
								<Card.Body>
									<img src='images/Icon4.png' alt='' />
									<div className='description'>
										<h3>Live Scroll Effects</h3>
										<p>
											8 different scroll effects are ready. <br /> You can
											always change by your tastes
										</p>
									</div>
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Features;
