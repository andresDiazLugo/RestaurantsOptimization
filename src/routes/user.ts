import { Router } from 'express';
import {controllerSignUp} from '../controllers/controllerUser.js';

const router = Router()


//ruta de signup o crear usuario
router.post('/signUp',controllerSignUp);

export { router }
