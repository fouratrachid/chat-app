import * as UserModel from '../models/user-model.js';

export const createUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await UserModel.createUser(name, email, password);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await UserModel.getUserById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await UserModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
 
};
