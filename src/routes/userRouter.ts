import express from 'express'
import { registerUser, getAllUsers, getUserById, updateUser, deleteUser, authUser } from '../controllers/userController';
import { userSchema, updateUserSchema, authSchema } from '../utils/validations';
import { validateSchema } from '../middlewares/validator';
import upload from '../middlewares/multer';
const usersRouter = express.Router();

usersRouter.post('/', validateSchema(userSchema), upload.single("profileImage"), registerUser);
usersRouter.get('/', getAllUsers);
usersRouter.patch('/:id', validateSchema(updateUserSchema), upload.single("profileImage"), updateUser);
usersRouter.get('/:id', getUserById);
usersRouter.delete('/:id', deleteUser);
usersRouter.post('/auth', validateSchema(authSchema), authUser);

export default usersRouter
