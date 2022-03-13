import React from 'react';
import '../styles/footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<React.Fragment>
			<section className='footer'>
				<div className='container footer-top'>
					<div className='row'>
						<div className='col-md-2'>
							<h4>Home</h4>
							<ul>
								<li>
									<Link to=''>Home</Link>
								</li>
								<li>
									<Link to=''>Community</Link>
								</li>
								<li>
									<Link to=''>Events</Link>
								</li>
								<li>
									<Link to=''>Contact</Link>
								</li>
							</ul>
						</div>
						<div className='col-md-2'>
							<h4>Resources</h4>
							<ul>
								<li>
									<Link to=''>Blog</Link>
								</li>
								<li>
									<Link to=''>News</Link>
								</li>
								<li>
									<Link to=''>Guides</Link>
								</li>
								<li>
									<Link to=''>Help Center</Link>
								</li>
							</ul>
						</div>
						<div className='col-md-2'>
							<h4>Community</h4>
							<ul>
								<li>
									<Link to=''>Newsfeed</Link>
								</li>
								<li>
									<Link to=''>Profile</Link>
								</li>
								<li>
									<Link to=''>Friends</Link>
								</li>
								<li>
									<Link to=''>Forum</Link>
								</li>
							</ul>
						</div>
						<div className='col-md-2'>
							<h4>Main Links</h4>
							<ul>
								<li>
									<Link to=''>Members</Link>
								</li>
								<li>
									<Link to=''>Activity</Link>
								</li>
								<li>
									<Link to=''>Groups</Link>
								</li>
								<li>
									<Link to=''>Private Group</Link>
								</li>
							</ul>
						</div>
						<div className='col-md-4'>
							<h4>
								Subscribe Cirkle <br /> Newsletter
							</h4>
							<p>
								Subscribe to be the first to know <br /> about updates. Enter
								your email
							</p>
							<input type='email' placeholder='Email Address' />
							<button className='btn'>Subscribe</button>
						</div>
					</div>
				</div>
				<div className='footer-bottom'>
					<div>
						<p>Besnik Creative Agency</p>
					</div>
					<div className='footer-logo'>
						<img src='images/Group.png' alt='' />
						<h3>Netbook</h3>
					</div>
					<div>
						<img src='images/socials.png' alt='' />
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Footer;
