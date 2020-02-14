// Express import
const express = require('express');
// Actions data import
const Actions = require('./actionModel.js')
// Router declaration
const router = express.Router();


// GET actions
router.get('/', (req, res) => {
  console.log(Actions);
  Actions.get().then(actions => {
    res.status(200).json(actions);
  }).catch(err => {
    console.log(err);
    res.status(500).json({ message: "Error retrieving actions" });
  });
});


module.exports = router;