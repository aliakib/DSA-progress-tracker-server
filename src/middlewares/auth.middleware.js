import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';
import logger from '../utils/logger.util.js';

export const protect = async (req, _res, next) => {
  try {
    let token;

    // Expect: Authorization: Bearer <token>
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      const err = new Error('Not authorized, token missing');
      err.statusCode = 401;
      throw err;
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to request (without password)
    const user = await User.findById(decoded.id);
    if (!user) {
      const err = new Error('User not found');
      err.statusCode = 401;
      throw err;
    }

    req.user = user;
    next();
  } catch (error) {
    logger.warn('Auth middleware error', error);

    error.statusCode = error.statusCode || 401;
    next(error);
  }
};
