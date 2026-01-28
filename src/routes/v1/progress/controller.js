import { successResponse } from '../../../utils/response.util.js';
import { ProgressService } from './service.js';

export const ProgressController = Object.freeze({
    toggleProgress: async (req, res, next) => {
        try {
            const { problemSlug } = req.body;
            const data = await ProgressService.toggle(
                req.user._id,
                problemSlug
            );

            return successResponse(res, 200, data, "Toggled successfully.");
        } catch (error) {
            next(error);
        }
    },
    
    getProgress: async (req, res, next) => {
        try {
            const data = await ProgressService.get(req.user._id);

            return successResponse(res, 200, data, "Progress fetched successfully.");
        } catch (error) {
            next(error);
        }
    }
});
