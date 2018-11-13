import React from 'react';

const Projects = (props) => {
	return (
		<div>
			<h1>Projects</h1>
			{props.projects.map((proj) => {
				return (
					<div key={proj.id}>
						<h2>Description: {proj.name}</h2>
						<p>Notes: {proj.description}</p>
						<p>Complete: {proj.completed === true ? 'true' : 'false'}</p>
						<h4>Actions</h4>
						{props.actions.map((action) => {
							return (
								<div key={action.id}>
									<h4>Description: {action.description}</h4>
									<p>Notes: {action.notes}</p>
									<p>Task Complete: {action.completed === true ? 'true' : 'false'}</p>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Projects;
