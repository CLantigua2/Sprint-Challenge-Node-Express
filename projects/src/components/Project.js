import React from 'react';
import Projects from './Projects';
import axios from 'axios';

class Project extends React.Component {
	constructor() {
		super();
		this.state = {
			projects: [],
			actions: []
		};
	}
	componentDidMount() {
		this.getAllProjects();
		this.getAllActions();
	}

	getAllProjects = () => {
		axios
			.get('http://localhost:9000/api/project/')
			.then((res) => this.setState({ projects: res.data }))
			.catch((err) => console.log(err));
	};

	getAllActions = () => {
		axios
			.get('http://localhost:9000/api/action/')
			.then((res) => this.setState({ actions: res.data }))
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div>
				<Projects projects={this.state.projects} actions={this.state.actions} />
				{/* <Actions actions={this.state.actions} /> */}
			</div>
		);
	}
}

export default Project;
