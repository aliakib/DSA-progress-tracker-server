import { createClient } from 'redis';
import { env } from './env.js';
import logger from '../utils/logger.util.js';

const redisClient = createClient({
  url: env.REDIS_URL, // e.g. redis://localhost:6379
});

redisClient.on('connect', () => {
  logger.info('✅ Redis connected');
});

redisClient.on('error', (err) => {
  logger.error('❌ Redis error', err);
});

await redisClient.connect();

export default redisClient;