import { env } from '../config/env.js';
import logger from '../utils/logger.util.js';

/**
 * 404 – Route Not Found
 */
export const notFound = (req, res, next) => {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  error.statusCode = 404;
  next(error);
};

/**
 * Global Error Handler
 */
export const errorHandler = (err, req, res, _next) => {
  const statusCode = err.statusCode || 500;

  // Log full error (with stack)
  logger.error(err);

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(env.NODE_ENV === 'development' && {
      stack: err.stack
    })
  });
};
