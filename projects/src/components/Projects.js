import React from 'react';

const Projects = (props) => {
	return (
		<div>
			<h1>Projects</h1>
			{props.projects.map((proj) => {
				return (
					<div key={proj.id}>
						<h3>Description: {proj.name}</h3>
						<p>Notes: {proj.description}</p>
						<p>Complete: {proj.completed === true ? 'true' : 'false'}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Projects;
