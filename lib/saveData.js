//UTil to print formatted Strings
const util = require('util');
const fs = require('fs');

const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);

//save functionality
class Save {
    write(note) {
        return writeNote('../Develop/db/db.json', JSON.stringify(note));
    }
    read() {
        return readNote('../Develop/db/db.json');
    }
    retrieveNotes() {
        return this.read().then(notes => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }
            return parsedNotes;
        });
    }
addNote(note) {
    const { title, text } = note;
    if (!title || !text) {
        throw new Error('Please fill out BOTH title and text.');
    }
    return this.retrieveNotes()
        .then(notes => [notes, newNote])
        .then(updateNotes => this.write(updateNotes))
        .then(() => newNote);
    //Puts new notes last in array, updates notes with new notes
}

}
module.exports = new Save();