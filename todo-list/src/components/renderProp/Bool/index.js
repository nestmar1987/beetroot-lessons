import { useState } from 'react';
import types from 'prop-types';

// ----------------

// Type of props

Bool.propTypes = {
	render: types.func.isRequired
};

// ----------------

export default function Bool(props) {
	// State

	const [isTrue, change] = useState(false);

	// Handlers

	function handleChange() {
		change(!isTrue);
	}

	// Render

	return props.render({
		handleChange,
		isTrue
	});
}
