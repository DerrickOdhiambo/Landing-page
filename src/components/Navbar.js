import React from 'react';
import '../styles/navigationBar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<section className='landing-page-navigation-bar'>
			<div className='logo-nav'>
				<img src={'images/logo.png'} alt='logo' />
				<ul>
					<li>
						<Link to='' className='active'>
							Home
						</Link>
					</li>
					<li>
						<Link to=''>Community</Link>
					</li>
					<li>
						<Link to=''>Blog</Link>
					</li>
					<li>
						<Link to=''>Events</Link>
					</li>
				</ul>
			</div>
			<div className='search-bar'>
				<input type='text' placeholder='Search Here..' />
				<button className='btn btn-primary'>log in</button>
			</div>
		</section>
	);
};

export default Navbar;
