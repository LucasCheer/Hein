import { Router } from "express";
import { createRegister, deleteRegister, getRegister, getRegisters, updateRegister } from "../controllers/register.controllers.js";

const router = Router()

router.get('/registros', getRegisters);

router.get('/registros/:id', getRegister);

router.post('/registros', createRegister);

router.put('/registros/:id', updateRegister);

router.delete('/registros/:id', deleteRegister);

export default router;