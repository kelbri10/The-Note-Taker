const express = require('express'); 
const path = require('path'); 
const app = express(); 

const PORT = process.env.PORT || 3000; 

//Body Parser Middleware for JSON
app.use(express.json())


//returns index.html to client-side 
app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'index.html')); 
})

//returns notes.html file to client-side 
app.get('/notes.html', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'notes.html')); 
})


// Notes api routes 
app.use('/api/notes', require('./routes/apiroutes'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)); 