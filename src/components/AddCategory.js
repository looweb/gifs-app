import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ onSubmit }) => {
	const [textValue, setTextValue] = useState('');

	const handleChange = (e) => {
		setTextValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (textValue.trim().length >= 2) {
			onSubmit(textValue);
			setTextValue('');
		}
	};

	return (
		<form onSubmit={handleSubmit} className="AddCategory">
			<input type="text" value={textValue} onChange={handleChange} />
		</form>
	);
};

AddCategory.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default AddCategory;
