import { Router } from 'express';

const router = Router();

router.get('/notes', (req, res) => {
  res.status(200).json({ message: 'Retrieved all notes' });
});

router.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.status(200).json({ message: `Retrieved note with ID: ${noteId}` });
});

export default router;
