import dotenv from 'dotenv';
import Joi from 'joi';
import logger from '../utils/logger.util.js';

// Load .env
dotenv.config();

/**
 * Define environment schema
 */
const envSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  PORT: Joi.number().default(5000),

  MONGO_URI: Joi.string().required(),

  JWT_SECRET: Joi.string().min(10).required()
}).unknown(true);

/**
 * Validate process.env
 */
const { value, error } = envSchema.validate(process.env);

if (error) {
  logger.error(`❌ Environment validation error: ${error.message}`);
  process.exit(1);
}

/**
 * Export safe, validated env
 */
export const env = Object.freeze({
  NODE_ENV: value.NODE_ENV,
  PORT: value.PORT,
  MONGO_URI: value.MONGO_URI,
  JWT_SECRET: value.JWT_SECRET
});
