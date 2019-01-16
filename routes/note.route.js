const express = require('express');
const router = express.Router();
const note_controller = require('../controllers/note.controller');

/**
 * GET requests
 */
router.get('/', note_controller.notes);
//router.get('/:id', note_controller.note_details);

/**
 * POST requests
 */
router.post('/notes', note_controller.note_create);

/**
 * PUT requests
 */
router.put('/notes/:id', note_controller.note_update);

/**
 * DELETE requests
 */
router.delete('/notes/:id', note_controller.note_delete);

module.exports = router;