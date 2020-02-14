// Express import
const express = require('express');
// Project data import
const Projects = require('./projectModel.js')
// Router declaration
const router = express.Router();


// GET projects
router.get('/', (req, res) => {
  console.log(Projects)
  Projects.get().then(projects => {
    res.status(200).json(projects);
  }).catch(err => {
    console.log(err);
    res.status(500).json({ message: "Error retrieving projects" });
  });
});


module.exports = router;