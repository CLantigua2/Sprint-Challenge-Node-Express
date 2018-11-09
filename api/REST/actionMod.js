const express = require('express');
const actionDB = require('../../data/helpers/actionModel');

const router = express.Router();
// gets all actionModels
router.get('/', (req, res) => {
	const { id } = req.params;
	actionDB
		.get(id)
		.then((action) => {
			res.status(200).json(action);
		})
		.catch((err) => res.status(500).json({ message: "Can't retrieve whatever this data is!!" }));
});

module.exports = router;
