import express from 'express';
import { createEvent, getAllEvents, getEventById, updateEventById, deleteEvent } from "../controllers/eventsController";
import { isLoggedIn } from '../middlewares/isLoggedIn';
const eventRouter = express.Router();

eventRouter.post('/', isLoggedIn, createEvent)
eventRouter.get('/', getAllEvents)
eventRouter.get('/:id', getEventById)
eventRouter.patch('/:id', isLoggedIn, updateEventById)
eventRouter.delete('/:id', isLoggedIn, deleteEvent)

export default eventRouter;