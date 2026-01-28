import { successResponse } from '../../../utils/response.util.js';
import { TopicsService } from './service.js';

export const TopicsController = Object.freeze({
    getTopics: async (_req, res, next) => {
        try {
            const data = await TopicsService.getAll();
            return successResponse(res, 200, data, "All Topics fetched successfully.")
        } catch (error) {
            next(error);
        }
    }
});