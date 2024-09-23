import { Router } from "express";
import { createUser, deleteUser, getUsers, getUser, updateUser } from "../controllers/users.controllers.js";

const router = Router()

router.get('/usuarios', getUsers);

router.get('/usuarios/:id', getUser);

router.post('/usuarios', createUser);

router.put('/usuarios/:id', updateUser );

router.delete('/usuarios/:id', deleteUser);

export default router;