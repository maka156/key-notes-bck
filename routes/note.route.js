const express = require('express');
const router = express.Router();
const note_controller = require('../controllers/note.controller');

// ROUTING HANDLER

/**
 * GET requests
 */
router.get('/', note_controller.notes);

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