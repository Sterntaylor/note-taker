// constants
const path = require('path');
//set up router
const router = require('express').Router();

//get to notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../develop/public/notes.html'));
});
//get to HTML
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../develop/public/index.html'));
});
//return to home upon error or wrong route
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../develop/public/index.html'));
});

module.exports = router;