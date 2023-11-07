import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from 'abcdhelloworld';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<div style={{ width: '600px', margin: '20px auto' }}>
			<h2>This is the demonstration of how to create github-pages</h2>
			<div>
				<h3>Default counter</h3>
				<Button />
			</div>
		</div>
	</React.StrictMode>
);
