import express from 'express';
import * as userController from '../controllers/user-controller.js';

const router = express.Router();

router.post('/signup', userController.createUser);
router.get('/:id', userController.getUserById);
router.get('/',userController.getAllUsers);

export default router; 