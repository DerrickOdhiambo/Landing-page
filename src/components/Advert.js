import React from 'react';
import '../styles/advert.scss';

const Advert = () => {
	return (
		<React.Fragment>
			<section className='advert'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6 cta-description'>
							<h3>get our application</h3>
							<h1>
								You can easily find <br />
								this app...!
							</h1>
							<p>
								I say chap that's suing lavaratory chip shop
								<br /> gosh off his smashing boot are you taking
								<br /> the piss posh loo brilliant
							</p>
							<div className='cta-buttons'>
								<img src='images/cta1.png' alt='' />
								<img src='images/cta2.png' alt='' />
							</div>
						</div>
						<div className='col-md-6 cta-image'>
							<img src='images/mobile.png' id='cta-image' alt='' />
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Advert;
