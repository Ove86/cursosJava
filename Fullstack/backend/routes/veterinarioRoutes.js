import express from 'express';
import { perfil, registrar,confirmar, autenticar, olvidePassword, comprobarToken, nuevoPassword } from '../controllers/VeterinarioController.js';
import checkAuth from '../middleware/authMiddleware.js';
const router = express.Router();

// lo pueden ver todo el mundo
router.post("/", registrar);
router.get("/confirmar/:token",confirmar);
router.post("/login",autenticar);
router.post('olvide-password', olvidePassword);
router.get('olvide-password/:token', comprobarToken);
router.post('olvide-password/:token', nuevoPassword);

// solo lo ven usuarios registrados
router.get("/perfil",checkAuth, perfil);

export default router;