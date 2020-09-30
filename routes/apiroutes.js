const express = require('express'); 
const router = express.Router(); 
const path = require('path'); 
const fs = require('fs'); 
//const notes = require('../db/db.json'); 



//returns saved notes as JSON
router.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, '../db/db.json'));
   // let notes = fs.readFileSync('./db/db.json', 'utf8')
   // res.json(notes); 
})

//saves note, adds it to the db.json file and return new note 
router.post('/', (req, res) => {

    //creates new Note with request body 
    let newNote = req.body; 
    

    //saves previous notes into array after reading db.json file
    let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8')); 
    newNote.id = (notes.length).toString(); 
    
    notes.push(newNote); 

    //writes new array of notes into db.json
    fs.writeFileSync('./db/db.json', JSON.stringify(notes), 'utf-8', (err)=>{
        if (err) throw err; 
    })

    //returns notes 
    res.json(newNote); 
})

//deletes note according to id
router.delete('/:id', (req, res) => { 

})


module.exports = router; 