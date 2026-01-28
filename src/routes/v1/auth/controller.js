import { successResponse } from '../../../utils/response.util.js';
import { AuthService } from './service.js';

export const AuthController = Object.freeze({
    signup: async (req, res, next) => {
        try {
            const data = await AuthService.signup(req.body);
            return successResponse(res, 201, data, 'User created successfully');
        } catch (error) {
            next(error);
        }
    },
    login: async (req, res, next) => {
        const { email, password } = req.body;
        try {
            const token = await AuthService.login(res, { email, password });
            return successResponse(res, 200, token, "Logged in successfully.")
        } catch (err) {
            next(err);
        }
    },
    getUser: async (req, res, next) => {
        try {
            const user = req.user;
            return successResponse(res, 200, user, "UserData Fetched Successfully.")
        } catch (error) {
            next(err)
        }
    }
})