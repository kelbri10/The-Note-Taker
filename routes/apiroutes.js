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
    
    //use fs to read file and turn db.json to a array of strings 
    const notes = JSON.stringify(db.json); 

    //take the note and append the title and body as a new object to the 
    //array 
    notes.push(req.body); 
    //return array to json and write file again, db.json
    JSON.parse(notes); 

    //rewrites notes to json file
    fs.writeFile('db.json', notes, 'utf-8', () =>{
         if (err) throw err; 
    })
})


module.exports = router; 