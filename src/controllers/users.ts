import express from 'express';

import { deleteUserByID, getUserByID, getUsers } from '../db/users';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();

        return res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;

        const deletedUser = await deleteUserByID(id);

        return res.json(deletedUser);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { username } = req.body;

        if (!username) {
            return res.sendStatus(400);
        }

        const user = await getUserByID(id);

        user.username = username;
        await user.save();

        res.status(200).send(user).end();
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}