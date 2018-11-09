import React from 'react';

const Actions = (props) => {
	return (
		<div>
			<h1>Actions</h1>
			{props.actions.map((action) => {
				return (
					<div key={action.id}>
						<h3>Description: {action.description}</h3>
						<p>Notes: {action.notes}</p>
						<p>Complete: {action.completed === true ? 'true' : 'false'}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Actions;
