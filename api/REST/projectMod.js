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

module.exports = router;
