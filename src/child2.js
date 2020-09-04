import React, { useReducer } from 'react';
import CounterReducer from './counterreducer';
const Child2 = () => {
	let [ state, dispatch ] = useReducer(CounterReducer, 1);

	return (
		<div>
			<h2>Value of reducer State is = {state}</h2>
			<button onClick={() => dispatch('INCREMENT')}>Increment Reducer</button>
		</div>
	);
};

export default Child2;
