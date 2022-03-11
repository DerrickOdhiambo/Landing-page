import React from 'react';
import '../styles/about.scss';

const About = () => {
	return (
		<React.Fragment>
			<section className='about container'>
				<div className='row'>
					<div className='col-md-6 about-us-description'>
						<h3>What's Netbook?</h3>
						<h1>
							why join netbook <br />
							social network?
						</h1>
						<p>
							Recet surveys have indicated that small businesses <br />
							recognise the need they have to connect with
							<br /> consumer
						</p>
						<div className='about-us-list'>
							<div className='groups'>
								<img src='images/ellipse.png' alt='' />
								<p>Groups</p>
							</div>
							<div className='messages'>
								<img src='images/ellipse.png' alt='' />
								<p>Messages</p>
							</div>
							<div className='share'>
								<img src='images/ellipse.png' alt='' />
								<p>Share</p>
							</div>
						</div>
						{/* <ul>
							<li>
								<span>
									{' '}
									<img src='images/ellipse.png' alt='' />{' '}
								</span>
								Groups
							</li>
							<li>
								<span>
									<img src='images/ellipse.png' alt='' />{' '}
								</span>
								Messages
							</li>
							<li>
								<span>
									<img src='images/ellipse.png' alt='' />{' '}
								</span>
								Share
							</li>
						</ul> */}
					</div>
					<div className='col-md-6 about-us-images'>
						<div className='image-1'>
							<img src={'images/Image.png'} alt='' />
						</div>
						<div className='image-2'>
							<img src={'images/Image1.png'} alt='' />
							<img src={'images/Image2.png'} alt='' />
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default About;
