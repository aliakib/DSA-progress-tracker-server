import { Router } from 'express';
import { TopicsController } from './controller.js';
import { protect } from '../../../middlewares/auth.middleware.js';

const router = Router();

// All progress routes are protected
router.use(protect);

router.get('/', TopicsController.getTopics);

export default router;
