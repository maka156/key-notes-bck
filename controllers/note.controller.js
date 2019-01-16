
const helper = require('../helper.js');
const Note = require('../models/note.model.js')

// GET request
exports.notes = (req, res, next) => {
  Note.find({}, (err, notes) => {
    if (err) return next(err)
    res.send(notes);
  })
}

// POST request
exports.note_create = (req, res, next) => {
    let note = new Note(
      {
        title: req.body.title,
        description: req.body.description
      }
    );

    note.save()
    .then(data => {      
      let d = []
      d.push(data)

      let response = helper.formatResponse(req, d)
      res.status(201).send(response)
    })
    .catch(err => {
      res.status(500).send({
        success: false,
        message: "Could not process your petition"
      })
    })
};

// PUT request
exports.note_update = (req, res, next) => {
  Note.findByIdAndUpdate(req.params.id, {$set: req.body}, err => {
    if (err) return next(err)

    let d = []
    d.push(req.body)

    let response = helper.formatResponse(req, d)
    res.status(200).send(response)
  });
}

// DELETE request
exports.note_delete = (req, res, next) => {
  Note.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err)
    res.status(204).send()
  })
}
