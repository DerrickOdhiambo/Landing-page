import React from 'react';
import '../styles/header.scss';
import Navbar from './Navbar';

const Header = () => {
	return (
		<React.Fragment>
			<section className='header'>
				<Navbar />
			</section>
		</React.Fragment>
	);
};

export default Header;
