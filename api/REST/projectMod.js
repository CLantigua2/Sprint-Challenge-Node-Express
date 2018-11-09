const express = require('express');
const projectDB = require('../../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
	const { id } = req.params;
	projectDB
		.get(id)
		.then((action) => {
			res.status(200).json(action);
		})
		.catch((err) => res.status(500).json({ message: "Can't retrieve whatever this data is!!" }));
});

router.get('/', (req, res) => {
	actionDB
		.get()
		.then((action) => {
			res.status(200).json(action);
		})
		.catch((err) => res.status(500).json({ message: "Can't retrieve whatever this data is!!" }));
}); //http://localhost:9000/api/action

router.post('/', (req, res) => {
	actionDB
		.insert(req.body)
		.then((action) => {
			res.status(201).json(action);
		})
		.catch((err) => {
			res.status(500).json({ message: 'error creating that action!!', err });
		});
}); //http://localhost:9000/api/action => takes in project_id/description/notes/completed(optional)

router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;
	actionDB
		.update(id, changes)
		.then((action) => {
			action
				? res.status(200).json({ message: 'Action updated like a boss' })
				: res.status(404).json({ message: 'That action does not exist' });
		})
		.catch((err) => {
			res.status(500).json({ message: 'error updating that action!!', err });
		});
}); //http://localhost:9000/api/action/1 <==id ==> takes in project_id/description/notes/completed(optional)

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	actionDB
		.remove(id)
		.then((count) => {
			count
				? res.status(200).json({ message: `Removed ${count} action from database` })
				: res.status(404).json({ message: "That action doesn't exist" });
		})
		.catch((err) => {
			res.status(500).json({ message: 'error deleting that action!!', err });
		});
}); //http://localhost:9000/api/action/1 <== takes an id for the action you want to delete
module.exports = router;
