import React from 'react';
import './home.css';
import RatingModal from '../components/RatingModal';


export default function Home() {
	return (
		<section className="home">
			<RatingModal
				icon=""
				title="Title"
				text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
			/>
		</section>
	);
}
