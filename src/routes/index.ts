import express from 'express'
import userRouter from './userRouter'
import eventsRouter from './eventsRouter'

const router = express.Router();

router.use('/users', userRouter);
router.use('/events', eventsRouter);

export default router