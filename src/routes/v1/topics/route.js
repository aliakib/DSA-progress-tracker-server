import { Router } from 'express';
import { TopicsController } from './controller.js';
import { protect } from '../../../middlewares/auth.middleware.js';

const router = Router();

router.use(protect);
router.get('/', TopicsController.getTopics);

export default router;
