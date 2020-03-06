import React, { useState } from 'react';
import types from 'prop-types';

// ----------------

// Type of props

Preloader.propTypes = {
	// loader: types.oneOfType(types.node, types.func).isRequired,
	render: types.func.isRequired
};

// ----------------

export default function Preloader(props) {
	// State

	const [isLoaded, load] = useState(false);

	// Handler

	function handleLoad() {
		load(true);
	}

	// Render

	return (
		<props.loader isLoaded={isLoaded}>
			{props.render({
				handleLoad,
				isLoaded
			})}
		</props.loader>
	);
}
