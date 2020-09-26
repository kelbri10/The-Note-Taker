const express = require('express'); 
const path = require('path'); 
const notes = require('./db/db.json'); 
const app = express(); 

const PORT = process.env.PORT || 3000; 

//returns index.html to client-side 
app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
})

//returns notes.html file to client-side 
app.get('/notes.html', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'notes.html')); 
})

//returns saved notes as JSON
app.get('/api/notes', (req, res) => { 
    res.json(notes); 
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 