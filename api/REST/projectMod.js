const express = require('express');
const projectDB = require('../../data/helpers/projectModel');
const actionDB = require('../../data/helpers/actionModel');

const router = express.Router();

// get all projects
router.get('/', (req, res) => {
	projectDB
		.get()
		.then((project) => {
			res.status(200).json(project);
		})
		.catch((err) => res.status(500).json({ message: "Can't retrieve whatever this data is!!" }));
}); //http://localhost:9000/api/project

//get projects by id
router.get('/:id', (req, res) => {
	const { id } = req.params;
	projectDB
		.get(id)
		.then((project) => {
			res.status(200).json(project);
		})
		.catch((err) => res.status(500).json({ message: "Can't retrieve whatever this data is!!" }));
}); //http://localhost:9000/api/project/1 <== takes id

router.post('/', (req, res) => {
	const { project_id, description, notes } = req.body;
	if (!project_id || !description || !notes) {
		res.status(400).json({ message: 'Must provide the project id, description and note.' });
	} else {
		projectDB
			.insert(req.body)
			.then((project) => {
				res.status(201).json(project);
			})
			.catch((err) => {
				res.status(500).json({ message: 'error creating that project!!', err });
			});
	}
}); //http://localhost:9000/api/project => takes in project_id/description/notes/completed(optional) 😎

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;
	projectDB
		.update(id, changes)
		.then((project) => {
			project
				? res.status(200).json({ message: 'project updated like a boss' })
				: res.status(404).json({ message: 'That project does not exist' });
		})
		.catch((err) => {
			res.status(500).json({ message: 'error updating that project!!', err });
		});
}); //http://localhost:9000/api/project/1 <==id ==> takes in project_id/description/notes/completed(optional) 😎

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	projectDB
		.remove(id)
		.then((count) => {
			count
				? res.status(200).json({ message: `Removed ${count} project from database` })
				: res.status(404).json({ message: "That project doesn't exist" });
		})
		.catch((err) => {
			res.status(500).json({ message: 'error deleting that project!!', err });
		});
}); //http://localhost:9000/api/project/1 <== takes an id for the project you want to delete
//all tested.. all good

router.get('/tasks/:id', (req, res) => {
	const { id } = req.params;
	projectDB
		.getProjectActions(id)
		.then((stuff) => {
			res.status(200).json(stuff);
		})
		.catch((err) => {
			res.status(500).json({ message: 'error, you done broke something!!', err });
		});
}); //http://localhost:9000/api/project/tasks/1 <==takes in id ==> spits out array of task objects
module.exports = router;
