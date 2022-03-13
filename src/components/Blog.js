import React from 'react';
import '../styles/blog.scss';

// Bootstrap Icons
import { BsArrowRight } from 'react-icons/bs';

const Blog = () => {
	return (
		<React.Fragment>
			<section className='blog'>
				<h3>get out application</h3>
				<h1>latest news</h1>
				<div className='container'>
					<div className='row'>
						<div className='col-md-4'>
							<img src='images/blog1.png' alt='' />
							<div className='blog-description'>
								<div className='line'></div>
								<div className='description-1'>
									<h4>
										It Does Not Matter Hows
										<br /> Slowly go as Long
									</h4>
									<button className='btn'>
										Continue reading <BsArrowRight />
									</button>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<img src='images/blog2.png' alt='' />
							<div className='blog-description'>
								<div className='line'></div>
								<div className='description-2'>
									<h4>
										Netbook Network Added
										<br /> New Photo Filter
									</h4>
									<button className='btn'>
										Continue reading <BsArrowRight />
									</button>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<img src='images/blog3.png' alt='' />
							<div className='blog-description'>
								<div className='line'></div>
								<div className='description-1'>
									<h4>
										We Optimised Netbooks
										<br /> Better Navigation
									</h4>
									<button className='btn'>
										Continue reading <BsArrowRight />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default Blog;
