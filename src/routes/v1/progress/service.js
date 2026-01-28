import User from '../../../models/User.model.js';
import logger from '../../../utils/logger.util.js';

export const ProgressService = Object.freeze({
  /**
   * Toggle completion status of a problem
   */
  toggle: async (userId, problemSlug) => {
    if (!problemSlug) {
      const err = new Error('problemSlug is required');
      err.statusCode = 400;
      throw err;
    }

    const user = await User.findById(userId);
    if (!user) {
      const err = new Error('User not found');
      err.statusCode = 404;
      throw err;
    }

    const currentStatus = user.progress.get(problemSlug) || false;
    user.progress.set(problemSlug, !currentStatus);

    await user.save();

    logger.info(
      `Progress updated | user=${user.email} | ${problemSlug}=${!currentStatus}`
    );

    return {
      problemSlug,
      completed: !currentStatus
    };
  },

  /**
   * Fetch user's progress map
   */
  get: async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
      const err = new Error('User not found');
      err.statusCode = 404;
      throw err;
    }

    return user.progress || {};
  }
});
