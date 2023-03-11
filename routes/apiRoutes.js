const router = require('express').Router();
const store = require('../db/store');

// once receive request from ani/notes, respond with notes from db

router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })

        // if find an error return error message 
        .catch((err) => res.status(500).json(err));
});

router.post('/notes', (req,res) => {
    store
        .addNotes(req.body)
        .then((notes) => res.json(notes))
        // if find an error return error message 
        .catch((err) => res.status(500).json(err));
});

// router.delete('/notes/', (req, res) => {
//     store
//         .deleteNotes(req.)
//         .then(() => res.json())
//         // if find an error return error message 
//         .catch((err) => res.status(500).json(err));
// });

module.exports = router;