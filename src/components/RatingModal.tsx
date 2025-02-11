import React, { useState } from 'react';
import './ratingModal.css';
import { Star } from 'lucide-react';
import { Rating } from '@mui/material';
import Box from '@mui/material'


interface RatingModalTextProps {
	icon: React.ReactNode; // modal icon to leave
	title?: string; // The title of the modal
	text?: string; // The text or description
}

export default function RatingModal({ ...pros }: RatingModalTextProps) {
	return (
		<section className="ratingModal">
			<div className="ratingModal__header">
				<button className="ratingModal__header__btn">{pros.icon}</button>
				<h1 className="ratingModal__header__title">{pros.title}</h1>
			</div>
			<p className="ratingModal__text">{pros.text}</p>
			<div className="ratingModal__rating">
				<Rating
					className="ratingModal__rating__star"
				/>
			</div>
		</section>
	);
}
