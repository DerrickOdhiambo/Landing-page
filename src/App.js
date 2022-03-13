import './App.scss';
import Header from './components/Header';
import About from './components/About';
import Achievement from './components/Achievement';
import Features from './components/Features';
import Members from './components/Members';
import Advert from './components/Advert';
import Blog from './components/Blog';

function App() {
	return (
		<div className='App'>
			<Header />
			<About />
			<Achievement />
			<Features />
			<Members />
			<Advert />
			<Blog />
		</div>
	);
}

export default App;
