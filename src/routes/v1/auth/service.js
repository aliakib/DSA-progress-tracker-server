import User from '../../../models/User.model.js';
import logger from '../../../utils/logger.util.js';
import { generateAccessToken } from '../../../utils/token.util.js';

export const AuthService = Object.freeze({
    signup: async ({ name, email, password }) => {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const err = new Error('User already exists');
            err.statusCode = 409;
            throw err;
        }

        const user = await User.create({
            name,
            email,
            password // 🔐 will be hashed by model hook
        });

        logger.info(`New user created: ${email}`);

        return {
            id: user._id,
            name: user.name,
            email: user.email
        };
    },
    login: async (_response, { email, password }) => {
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            const err = new Error('Invalid credentials');
            err.statusCode = 401;
            throw err;
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            const err = new Error('Invalid credentials');
            err.statusCode = 401;
            throw err;
        }

        const token = generateAccessToken({ id: user._id });

        logger.info(`User logged in: ${user.email}`);

        return {
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        };
    }
});
