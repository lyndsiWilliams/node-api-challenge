// Express import
const express = require('express');
// Project data import
const Projects = require('./projectModel.js')
// Router declaration
const router = express.Router();


// GET projects - get()
router.get('/', (req, res) => {
  console.log(Projects);
  Projects.get().then(projects => {
    res.status(200).json(projects);
  }).catch(err => {
    console.log(err);
    res.status(500).json({ message: "Error retrieving projects" });
  });
});

// getProjectActions()

// POST - insert()
router.post('/', (req, res) => {
  const projectData = req.body;

  if (!projectData.name || !projectData.description) {
    res.status(400).json({ message: "Please provide a name and description for this post." })
  } else {
    Projects.insert(projectData).then(post => {
      res.status(201).json(post);
    }).catch(err => {
      console.log(err);
      res.status(500).json({ message: "There was an error saving the post to the database." })
    });
  };
});

// PUT - update()
router.put('/:id', (req, res) => {
  const projectData = req.body;
  const id = req.params.id;

  if (!id) {
    res.status(404).json({ message: "The project with the specified ID does not exist." });
  } else if (!projectData.name || !projectData.description) {
    res.status(400).json({ message: "Please provide a name and description for this post." })
  } else {
    Projects.update(id, projectData).then(post => {
      res.status(200).json(post);
    }).catch(err => {
      console.log(err);
      res.status(500).json({ message: "The post's information could not be retrieved." })
    });
  };
});

// DELETE - remove()


module.exports = router;