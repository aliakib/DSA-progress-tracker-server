import Topic from '../../../models/Topic.model.js';
import { getCache, setCache } from '../../../utils/cache.util.js';

const TOPICS_CACHE_KEY = 'topics:all';

export const TopicsService = Object.freeze({
  getAll: async () => {
    // get data from cache
    const cached = await getCache(TOPICS_CACHE_KEY);
    if (cached) {
      return cached;
    }

    // if cache not available Fetch from DB
    const topics = await Topic.find()
      .sort({ order: 1 })
      .lean();

    // Store in cache (valid for 10 min)
    await setCache(TOPICS_CACHE_KEY, topics, 600);

    return topics;
  },
});