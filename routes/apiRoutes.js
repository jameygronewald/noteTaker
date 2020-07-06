const noteData = require('../db/db.json');
const fs = require('fs');

module.exports = (app) => {
    
    app.get('/api/notes', (req, res) => {
        res.json(noteData);
    });
    
    app.post('/api/notes', (req, res) => {
        let newNote = req.body;
        newNote.id = Date.now();
        console.log(newNote);
        noteData.push(newNote);
        fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(noteData), (err) => {
            if (err) {
                throw err;
            }
            else {
                res.json(newNote);
                console.log('Success');
            }
        });
    });

    app.delete('/api/notes:id', (req,res) => {
        // let noteToDelete = req.params.id
        res.send(console.log(req.params.id));
    });
};