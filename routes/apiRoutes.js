//Can't use app, but can use router
const router = require('express').Router();

// Link to save functions
const saveData = require('../lib/saveData');
    //rather then writing all functions within "{} = req" this shortens code

//GET and POST
router.get('/notes', function (req, res) {
    saveData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});
router.post('/notes', (req, res) => {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});
//added catch err to handle errors, picked 500 as it would be an issue with server rather then 404
//because 404 isn't an issue with server usually. Most of the time it is incorrect/invalid url

//export
module.exports = router;