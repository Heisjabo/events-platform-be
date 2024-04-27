import express from 'express'
import { registerUser, getAllUsers, getUserById, updateUser, deleteUser, authUser } from '../controllers/userController';
const usersRouter = express.Router();

usersRouter.post('/', registerUser);
usersRouter.get('/', getAllUsers);
usersRouter.patch('/:id', updateUser);
usersRouter.get('/:id', getUserById);
usersRouter.delete('/:id', deleteUser);
usersRouter.post('/auth', authUser);

export default usersRouter
