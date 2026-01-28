import { Router } from 'express';
import { loginSchema, signupSchema } from './validator.js';
import { AuthController } from './controller.js'
import { validate } from '../../../middlewares/validate.middleware.js';
import { protect } from '../../../middlewares/auth.middleware.js';

const router = Router();

router.post('/signup', validate(signupSchema), AuthController.signup);

router.post('/login', validate(loginSchema), AuthController.login);

router.get('/me', protect, AuthController.getUser)

export default router;