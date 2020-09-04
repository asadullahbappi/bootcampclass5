import React, { useContext } from 'react';
import counterContext from './countercontext';
function Child() {
	let counterValue = useContext(counterContext);

	return (
		<div>
			<h1>This is first child</h1>
			<h4>Counter Value is : {counterValue[0]}</h4>
			<button
				onClick={() => {
					counterValue[1](++counterValue[0]);
				}}
			>
				Increment
			</button>
		</div>
	);
}

export default Child;
