import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifsGrid from './components/GifsGrid';

const GifApp = () => {
	const [categories, setCategories] = useState(['Star Wars']);

	const handleAdd = (category) => {
		setCategories([category, ...categories]);
	};

	const handleDelete = (categoryIndex) => {
		setCategories(categories.filter((_, index) => index !== categoryIndex));
	};

	return (
		<div className="GifApp">
			<h1>Gifs App</h1>
			<AddCategory onSubmit={handleAdd} />
			<hr />
			<ol>
				{categories.map((category, i) => (
					<GifsGrid
						key={`${i}${category}`}
						category={category}
						index={i}
						onClickDelete={handleDelete}
					/>
				))}
			</ol>
		</div>
	);
};

export default GifApp;
