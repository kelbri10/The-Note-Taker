const express = require('express'); 
const router = express.Router(); 
const fs = require('fs'); 
const notes = require('../db/db.json'); 



//returns saved notes as JSON
router.get('/', (req, res) => { 
    res.json(notes); 
})

//saves note, adds it to the db.json file and return new note 
router.post('/', (req, res) => {
    console.log(req.body); 
})


module.exports = router; 