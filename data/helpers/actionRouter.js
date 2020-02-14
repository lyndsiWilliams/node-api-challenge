// Express import
const express = require('express');
// Actions data import
const Actions = require('./actionModel.js')
// Router declaration
const router = express.Router();


// GET actions - get()
router.get('/', (req, res) => {
  console.log(Actions);
  Actions.get().then(actions => {
    res.status(200).json(actions);
  }).catch(err => {
    console.log(err);
    res.status(500).json({ message: "Error retrieving actions" });
  });
});

// POST - insert()
router.post('/', (req, res) => {
  const { project_id, description, notes } = req.body;

  if (!actionData.description || !actionData.notes) {
    res.status(400).json({ message: "Please provide a description and notes." });
  } else if (!actionData.description.length > 128) {
    res.status(400).json({ message: "Description must not exceed 128 characters." })
  } else {
    Actions.insert({ project_id, description, notes }).then(post => {
      res.status(201).json(post);
    }).catch(err => {
      console.log(err);
      res.status(500).json({ message: "There was an error saving the post to the database." })
    });
  };
});

// PUT - update()
router.put('/:id', (req, res) => {
  const actionData = req.body;
  const id = req.params.id;

  Actions.update(id, actionData).then(action => {
    res.status(200).json(action);
  }).catch(err => {
    console.log(err);
    res.status(500).json({ message: "There was an error updating action." })
  });
})

// DELETE - remove()


module.exports = router;