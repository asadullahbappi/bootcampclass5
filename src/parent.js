import React from 'react';
import Child from './child.js';
import Child2 from './child2.js';
function Parent(props) {
	return (
		<div>
			<Child />
			<Child2 />
		</div>
	);
}

export default Parent;
