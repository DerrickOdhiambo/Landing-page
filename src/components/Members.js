import React from 'react';
import '../styles/members.scss';

const Members = () => {
	return (
		<React.Fragment>
			<section className='team'>
				<div className='team-upper-section'>
					<h3>valuable members</h3>
					<h1 className='mb-3'>our active members</h1>
					<p className='mb-3'>
						when an unknown printer took a gallery of type meeting <br /> fari
						scrambled it
					</p>
					<div className='pill mb-5'>
						<button className='btn'>Newest</button>
						<button className='btn'>Popular</button>
						<button className='btn active'>Active</button>
					</div>
				</div>
				<div className='team-lower-section container'>
					<div className='row'>
						<div className='col-md-3'>
							<div className='members-image-1'>
								<img src='images/Abstrack.png' className='img-fluid' alt='' />
								<img src='images/member1.png' id='member' alt='' />
								<img src='images/Check.png' id='check' alt='' />
								<div className='members-description'>
									<h3>Fahim Rahman</h3>
									<p>@rahman</p>
								</div>
							</div>
						</div>
						<div className='col-md-3'>
							<img src='images/card2.png' alt='' />
						</div>
						<div className='col-md-3'>
							<img src='images/card3.png' alt='' />
						</div>
						<div className='col-md-3'>
							<img src='images/card4.png' alt='' />
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Members;
