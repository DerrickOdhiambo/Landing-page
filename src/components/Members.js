import React from 'react';
import '../styles/members.scss';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const Members = () => {
	return (
		<React.Fragment>
			<section className='team'>
				<div className='team-upper-section'>
					<h3>valuable members</h3>
					<h1>our active members</h1>
					<p>
						when an unknown printer took a gallery of type meeting <br /> fari
						scrambled it
					</p>
					<ButtonGroup size='lg' className='mb-2'>
						<Button>Left</Button>
						<Button>Middle</Button>
						<Button>Right</Button>
					</ButtonGroup>
				</div>
				<div className='team-lower-section container'>
					<div className='row'>
						<div className='col-md-3'>
							<img src='images/card2.png' alt='' />
						</div>
						<div className='col-md-3'>
							<img src='images/card1.png' alt='' />
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
