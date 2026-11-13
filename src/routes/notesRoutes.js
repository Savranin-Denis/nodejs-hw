import { Router } from 'express';
import {
  createNote,
  getAllNotes,
  getNoteById,
} from '../controllers/notesController.js';

const router = Router();

router.get('/notes', getAllNotes);
router.get('/notes/:noteId', getNoteById);
router.post('/notes', createNote);

export default router;
