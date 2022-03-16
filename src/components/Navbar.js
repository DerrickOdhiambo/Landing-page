import React, { useEffect, useState } from 'react';
import '../styles/navigationBar.scss';
import { Link } from 'react-router-dom';

//Icons
import { BiAlignRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [size, setSize] = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (size.width > 763 && menuOpen) {
			setMenuOpen(false);
		}
	}, [size.width, menuOpen]);

	const menuToggleHangler = () => {
		setMenuOpen((p) => !p);
	};

	return (
		<section className='landing-page-nav'>
			<div className='landing-page-navigation-bar'>
				<div className='logo-nav'>
					<img src={'images/logo.png'} alt='logo' />
				</div>
				<div className={`nav_bar ${menuOpen ? 'isMenu' : ''}`}>
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
					<div className='search-bar'>
						<input type='text' placeholder='Search Here..' />
						<button className='btn btn-primary text-capitalize'>log in</button>
					</div>
				</div>
				<div className='navbar_content_toggle'>
					{!menuOpen ? (
						<BiAlignRight onClick={menuToggleHangler} />
					) : (
						<AiOutlineClose onClick={menuToggleHangler} />
					)}
				</div>
			</div>
		</section>
	);
};

export default Navbar;
