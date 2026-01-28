import Topic from '../../../models/Topic.model.js';
import { getCache, setCache } from '../../../utils/cache.util.js';

const TOPICS_CACHE_KEY = 'topics:all';

export const TopicsService = Object.freeze({
  getAll: async () => {
    // 1️⃣ Try cache
    const cached = await getCache(TOPICS_CACHE_KEY);
    if (cached) {
      return cached;
    }

    // 2️⃣ Fetch from DB
    const topics = await Topic.find()
      .sort({ order: 1 })
      .lean();

    // 3️⃣ Store in cache (10 min)
    await setCache(TOPICS_CACHE_KEY, topics, 600);

    return topics;
  },
});