import React from 'react';
import './home.css';
import RatingModal from '../components/RatingModal';
import { X } from 'lucide-react';

export default function Home() {
	return (
		<section className="home">
			<RatingModal
				icon={<X />}
				title="How Many stars would you give to them?"
				text="Nisqy delivered your order from McDo, today at 19:47 (7min ahead schedule)."
			/>
		</section>
	);
}
