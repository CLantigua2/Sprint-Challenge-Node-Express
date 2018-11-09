import React from 'react';

const Projects = (props) => {
	return (
		<div>
			{props.projects.map((proj) => {
				return (
					<div key={proj.id}>
						<h3>Description: {proj.description}</h3>
						<p>Notes: {proj.notes}</p>
						<p>Complete: {proj.completed}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Projects;
