import React, { useState, useEffect } from "react";

const testimonials = [
	{
		text: "Very fast delivery. I recommend to everyone. The food is very hot and fresh and also as tasty as in a restaurant. The application is very convenient and understandable.",
		name: "Marco Bituchini",
		date: "May 16, 2020",
		img: "https://randomuser.me/api/portraits/men/32.jpg",
	},
	{
		text: "Amazing service and delicious food! Will definitely order again. The delivery was on time and the packaging was perfect.",
		name: "Anna Smith",
		date: "June 2, 2021",
		img: "https://randomuser.me/api/portraits/women/44.jpg",
	},
	{
		text: "Great variety and easy to use app. My family loved the meal. Highly recommended for everyone who loves good food.",
		name: "John Doe",
		date: "August 10, 2022",
		img: "https://randomuser.me/api/portraits/men/65.jpg",
	},
];

const Testimonials = () => {
	const [current, setCurrent] = useState(0);

	// Auto-advance carousel every 5 seconds
	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrent((prev) => (prev + 1) % testimonials.length);
		}, 5000);
		return () => clearTimeout(timer);
	}, [current]);

	const prevTestimonial = () => {
		setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	const nextTestimonial = () => {
		setCurrent((prev) => (prev + 1) % testimonials.length);
	};

	const { text, name, date, img } = testimonials[current];

	return (
		<section className="max-w-3xl mx-auto py-16 px-4 text-center">
			<span className="text-amber-500 text-xl font-semibold block mb-2">
				Testimonials
			</span>
			<h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-serif">
				Happy Clients Say
			</h2>
			{/* Carousel */}
			<div className="transition-all duration-500">
				<p className="text-gray-400 mb-8 min-h-[72px]">{text}</p>
				<div className="flex items-center justify-center gap-4 mb-4">
					<button
						className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-amber-200 transition"
						onClick={prevTestimonial}
						aria-label="Previous testimonial"
					>
						&#8592;
					</button>
					<img
						src={img}
						alt={name}
						className="w-14 h-14 rounded-full border-4 border-amber-400 object-cover"
					/>
					<button
						className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-amber-200 transition"
						onClick={nextTestimonial}
						aria-label="Next testimonial"
					>
						&#8594;
					</button>
				</div>
				<div>
					<div className="font-bold">{name}</div>
					<div className="text-gray-400 text-sm">{date}</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;