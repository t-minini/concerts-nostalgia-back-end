import express from 'express';
const router = express.Router();
import {
  getConcerts,
  getConcert,
  addConcert,
  editConcert,
  deleteConcert,
} from './../controllers/concert.controller.js';

router.get('/all', getConcerts);
router.get('/:id', getConcert);
router.post('/add', addConcert);
router.put('/edit/:id', editConcert);
router.delete('/delete/:id', deleteConcert);

export default router;

// THIS CODE: DEFINES ROUTES FOR HANDLING CRUD OPERATIONS ON CONCERT DATA. EACH ROUTE CORRESPOND TO A SPECIFIC CONTROLLER FUNCTION.
