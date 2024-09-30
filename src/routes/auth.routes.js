import { Router } from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/auth.controllers.js";

const router = Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser)

router.get('/protected', );

export default router;
