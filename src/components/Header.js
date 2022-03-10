import React from 'react';
import '../styles/header.scss';
import Navbar from './Navbar';

const Header = () => {
	return (
		<React.Fragment>
			<section className='header'>
				<Navbar />
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-md-6 call-to-action-section'>
							<div className='call-to-action'>
								<div className='network-community-section'>
									<h6>Netbook community</h6>
								</div>
								<h1>
									your solutions for <br />
									community
								</h1>
								<p>
									More than 2 billion people in over countries use socibook{' '}
									<br />
									to stay in touch with friends and family
								</p>
								<div className='call-to-action-buttons'>
									<button className='btn button-1'>about more</button>
									<button className='btn button-2'>invite friend</button>
								</div>
							</div>
						</div>
						<div className='col-md-6 landing-page-image'>
							<img src='images/Iamge.png' alt='' />
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Header;
