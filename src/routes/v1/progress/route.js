import { Router } from 'express';
import { protect } from '../../../middlewares/auth.middleware.js';
import { ProgressController } from './controller.js';

const router = Router();

// All progress routes are protected
router.use(protect);

router.post('/toggle', ProgressController.toggleProgress);
router.get('/', ProgressController.getProgress);

export default router;
