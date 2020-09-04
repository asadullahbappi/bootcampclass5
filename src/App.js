import React, { useState } from 'react';
import './App.css';
import Parent from './parent';
import CounterContext from './countercontext.js';

function App() {
	let count = useState(1);
	return (
		<CounterContext.Provider value={count}>
			<div>
				<Parent />
			</div>
		</CounterContext.Provider>
	);
}

export default App;
