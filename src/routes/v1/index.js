import { Router } from 'express';

import authRoutes from './auth/route.js';
import topicRoutes from './topics/route.js';
import progressRoutes from './progress/route.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/topics', topicRoutes);
router.use('/progress', progressRoutes);

export default router;