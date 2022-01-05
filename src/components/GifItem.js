import React from 'react';

const GifItem = ({ title, url }) => {
	return (
		<div className="GifItem">
			<img className=" animate__animated animate__fadeIn animate__faster" src={url} alt={title} />
			<p className="animate__animated animate__fadeIn">{title}</p>
		</div>
	);
};

export default GifItem;
